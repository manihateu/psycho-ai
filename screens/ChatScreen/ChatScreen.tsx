import { Dimensions, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity } from "react-native"
import MessageBubble from "./components/MessageBubble"
import { mockData } from "./mock.data"
import { FlatList } from "react-native-gesture-handler"
import { View } from "react-native"
import { mixins } from "../../constans"
import { Image } from "react-native-svg"
import ArrowSVG from "../../assets/arrow.svg"
import Layout from "../../components/Layout/Layout"
import { useState } from "react"
import { useSendMessageMutation } from "../../store/api/chatGPTApiSlice"


export const ChatScreen = () => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const [sendMessage] = useSendMessageMutation();

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input, user_name: "Никита" };
        setMessages([...messages, userMessage]);
        setInput('');
        setIsTyping(true);

        try {
            const response = await sendMessage(userMessage.content).unwrap();
            console.log(response)
            const assistantMessage = {
                role: 'assistant',
                content: response.response,
            };
            setMessages((prevMessages) => [...prevMessages, assistantMessage]);
            console.log(messages)
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <Layout name='Ментальный помощник'>
            <FlatList className="" contentContainerStyle={{ rowGap: 10 }}
                data={messages}
                renderItem={({ item, index }) => (<MessageBubble key={index} message={item.content} owner={item.role == 'user'} owner_name={item.user_name} />)}
            />
            <View style={[{ width: Dimensions.get('screen').width, }, mixins.shadow]} className="absolute bottom-0 left-0 flex flex-row items-center rounded-t-xl bg-white shadow">
                <TextInput onChangeText={setInput} value={input} className="p-3 bg-white m-3 w-5/6 rounded-xl border border-0.5 flex items-center" />
                <TouchableOpacity onPress={handleSendMessage} className="">
                    <ArrowSVG width={32} height={32} />
                </TouchableOpacity>
            </View>
        </Layout>

    )
}
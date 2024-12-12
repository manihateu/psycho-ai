import ComInput from "../../shared/ComInput/ComInput"
import { useState } from "react"
import { Dimensions, TouchableOpacity, View } from "react-native"
import MessageBubble from "./components/MessageBubble"
import { useGetUserQuery, useSendBotMessageMutation } from "../../store/api/authorizeApiSlice"
import Arrow from "../../assets/arrow.svg"


export const ChatScreen = () => {
    const [sendBotMessage, {isLoading: sendLoading}] = useSendBotMessageMutation ()
    const [value, setValue] = useState <string> ("")
    const{data, error, isLoading} = useGetUserQuery({})
    const [messages, setMessages] = useState <{message: string, owner: boolean}[]> ([])
    console.log(value)
    const handleSendMessage = async () => {
        try{
            
            setMessages((message) => [...message, {owner: true, message: value}])
            await sendBotMessage ({message: value}).unwrap().then((data) => {
                setMessages((message) => [...message, {owner: false, message: data.response}])
                console.log(data)
            })
            
            
        }catch (e){
            console.log(e)
        }
    }
    return (
        <View className="p-[16px] flex-1">
            {
                !isLoading && messages.map((message, index) => 
                    <MessageBubble owner={message.owner} key={index} owner_name={!isLoading && data.name} message={message.message}/>
                )
            }
            <View style={{minWidth: Dimensions.get("screen").width - 32}} className="absolute bottom-[9px] mx-[16px] w-full flex-row  ">
                <View style={{flex: 6}}>
                <ComInput value={value} onChange={setValue} placeholder="Задай свой вопрос..." classNames="flex-3"/>
                </View>
                <TouchableOpacity onPress={handleSendMessage} className="flex-1 justify-center  items-end">
                    <Arrow width={40} height={40}/>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
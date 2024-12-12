import ComInput from "../../shared/ComInput/ComInput"
import { useRef, useState } from "react"
import { Dimensions, TouchableOpacity, View } from "react-native"
import MessageBubble from "./components/MessageBubble"
import { useGetUserQuery, useSendBotMessageMutation } from "../../store/api/authorizeApiSlice"
import Arrow from "../../assets/arrow.svg"
import { ScrollView } from "react-native-gesture-handler"
import Skeleton from "../../shared/ComSkeleton/ComSkeleton"


export const ChatScreen = () => {
    const [sendBotMessage, {isLoading: sendLoading}] = useSendBotMessageMutation ()
    const [value, setValue] = useState <string> ("")
    const{data, error, isLoading} = useGetUserQuery({})
    const [messages, setMessages] = useState <{message: string, owner: boolean}[]> ([])
    const scrollViewRef = useRef(null)

    const scrollToEnd = () => {
		setTimeout(() => {
		  scrollViewRef?.current?.scrollToEnd({ animated: true });
		}, 100);
	};
    // console.log(value)
    const handleSendMessage = async () => {
        try{
            
            setMessages((message) => [...message, {owner: true, message: value}])
            const mes = value;
            scrollToEnd()
            setValue("")
            await sendBotMessage (mes).unwrap().then((data) => {
                setMessages((message) => [...message, {owner: false, message: data.response}])
                // console.log(data)
                scrollToEnd()
            })
            
        }catch (e){
            console.log(e)
        }
    }
    return (
        <>
        <ScrollView ref={scrollViewRef} className="p-[16px] flex-1 mb-[100px]">
            {
                !isLoading && messages.map((message, index) => 
                    <MessageBubble owner={message.owner} key={index} owner_name={!isLoading && data.name} message={message.message}/>
                )
            }
            { sendLoading &&
                <View className="flex flex-row gap-x-3 items-end mb-5">
                    <Skeleton style={{width: 32, height: 32, borderRadius: 18}}/>
                    <Skeleton style={{width: 200, height: 200}}/> 
                </View>  
            }     

        </ScrollView>
            <View style={{minWidth: Dimensions.get("screen").width}} className="absolute bottom-[9px] px-[16px] w-full flex-row  ">
                <View style={{flex: 6}}>
                <ComInput value={value} onChange={setValue} placeholder="Задай свой вопрос..." classNames="flex-3"/>
                </View>
                <TouchableOpacity onPress={handleSendMessage} className="flex-1 justify-center  items-end">
                    <Arrow width={40} height={40}/>
                </TouchableOpacity>

            </View>
        </>
    )
}
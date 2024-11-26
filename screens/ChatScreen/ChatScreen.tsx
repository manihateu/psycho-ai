import { SafeAreaView } from "react-native"
import MessageBubble from "./components/MessageBubble"
import { mockData } from "./mock.data"

export const ChatScreen = () => {
    
    
    return (
        
        <SafeAreaView style={{}}>
            {mockData.map(message => 
                <MessageBubble message={message.massage} owner={message.owner} owner_name={message.owner_name}/>
            )}
        
        
        </SafeAreaView>
    )
}
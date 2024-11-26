import { SafeAreaView, StatusBar } from "react-native"
import MessageBubble from "./components/MessageBubble"
import { mockData } from "./mock.data"
import { FlatList } from "react-native-gesture-handler"

export const ChatScreen = () => {
    
    
    return (
        
        <SafeAreaView style={{marginTop: StatusBar.currentHeight}}>
            <FlatList 
                data={mockData}
                renderItem={({item, index}) => (<MessageBubble key={item.id} message={item.massage} owner={item.owner} owner_name={item.owner_name}/>)}
            />
        </SafeAreaView>
    )
}
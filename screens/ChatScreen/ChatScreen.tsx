import { Dimensions, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity } from "react-native"
import MessageBubble from "./components/MessageBubble"
import { mockData } from "./mock.data"
import { FlatList } from "react-native-gesture-handler"
import { View } from "react-native"
import { mixins } from "../../constans"
import { Image } from "react-native-svg"
import ArrowSVG from "../../assets/arrow.svg"
import Layout from "../../components/Layout/Layout"


export const ChatScreen = () => {
    
    
    return (
        <Layout name='Ментальный помощник'>
            
                <FlatList className="" contentContainerStyle={{rowGap: 10}} 
                    data={mockData}
                    renderItem={({item, index}) => (<MessageBubble key={item.id} message={item.massage} owner={item.owner} owner_name={item.owner_name}/>)}
                />
            <View style={[{width: Dimensions.get('screen').width,}, mixins.shadow]} className="absolute bottom-0 left-0 flex flex-row items-center rounded-t-xl bg-white shadow">
                <TextInput className="p-3 bg-white m-3 w-5/6 rounded-xl border border-0.5 flex items-center" />
                <TouchableOpacity className="">
                    <ArrowSVG width = {32} height={32}/>
                </TouchableOpacity>
                
            </View>
            
            
        </Layout>
        
    )
}
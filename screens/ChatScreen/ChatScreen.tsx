import Layout from "../../components/Layout/Layout"
import ComButton from "../../shared/ComButton/ComButton"
import ComInput from "../../shared/ComInput/ComInput"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { StackNavigation } from "../../components/RootNavigator/RootNavigator"


export const ChatScreen = () => {

    const [value, setValue] = useState <string> ("")
    const navigation = useNavigation <StackNavigation> ()
    
    return (
        <Layout name='Ментальный помощник'>  
                <ComButton onPress={() => {navigation.navigate("OnboardingScreen")}} title="начнем" variant="primary"/>
                <ComInput placeholder="Google" onChange={(Text) => {setValue(Text)}} value={value}/>
        </Layout>
        
    )
}
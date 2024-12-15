import { ImageBackground, StatusBar, Text, View } from "react-native"
import ComSafeAreaView from "../../shared/ComSafeAreaView/ComSafeAreaView"
import DarkLogo from '../../assets/DarkLogo.svg'
import WelcomeBG from '../../assets/WelcomeBg.png'
import ComButton from "../../shared/ComButton/ComButton"
import { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { StackNavigation } from "../../components/RootNavigator/RootNavigator"
const WelcomeScreen = () => {
    useEffect(() => {
        StatusBar.setBackgroundColor("#8E97FD", true)
    }, [])
    const navigation = useNavigation<StackNavigation>()
    navigation.addListener('beforeRemove', () => {
        StatusBar.setBackgroundColor("#FFFFFF", true)
    })
    return (
        <ComSafeAreaView className="bg-[#8E97FD]">
            <ImageBackground source={WelcomeBG} className="h-full">
                <View  className={`w-full flex p-3 flex-row items-center mt-[${StatusBar.currentHeight ? 50 - StatusBar.currentHeight : 30}px] justify-center`}>
                    <Text className='font-Comfortaa min-w-[102px] mr-[8px] text-white'>Ментальный</Text>
                    <DarkLogo width={30} height={30}/>
                    <Text className='font-Comfortaa min-w-[102px] ml-[8px] text-white'>Помощник</Text>
                </View>
                <View className="w-full px-[11px] mt-[75px]">
                    <Text className="font-Comfortaa text-white text-[30px] text-center">
                        Добро пожаловать 
                        в Ментальный помощник
                    </Text>
                    <Text className="mt-[40px] font-Comfortaa text-white text-[16px] text-center">
                        Пользуйтесь нашим приложением и получайте ментальную помощь и разгрузку
                    </Text>
                </View>
                <View className="absolute bottom-[95px] left-0 right-0 w-full px-[22px]">
                    <ComButton onPress={() => {navigation.navigate("ChooseTopicScreen")}} title="Начнем!" variant="secondary" size="medium"/>
                </View>
            </ImageBackground>
        </ComSafeAreaView>
    )
}

export default WelcomeScreen
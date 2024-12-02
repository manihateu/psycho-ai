import { Dimensions, ImageBackground, Text } from "react-native"
import Layout from "../../components/Layout/Layout"
import { View } from "react-native"
import FaltCardBG from "../../assets/faltCardBg.png"
import Play from '../../assets/Play.svg'
import FlatPlayCard from "./FlatPlayCard/FlatPlayCard"

const HomeScreen = () => {
    return (
        <View className="w-full p-[20px]">
            <Text className="font-Comfortaa text-xl">Доброе утро, User!</Text>
            <Text className="font-Comfortaa text-lg text-[#A1A4B2]">Мы желаем вам хорошего дня</Text>
            <View className="flex flex-row justify-between gap-x-[20px] mt-[30px]">
                <View className="bg-[#8E97FD] rounded-xl p-[15px]" style={{width: (Dimensions.get("screen").width/2) - 20 - 15}}>
                    <Text className="font-Comfortaa text-white">Привет</Text>
                </View>
                <View className="bg-[#FFDB9D] rounded-xl p-[15px]" style={{width: (Dimensions.get("screen").width/2) - 20 - 15}}>
                    <Text className="font-Comfortaa text-white">Привет</Text>
                </View>
            </View>
            <FlatPlayCard />
            <Text className="font-Comfortaa text-xl mt-[40px]">Для тебя</Text>

        </View>
    )
}

export  default HomeScreen
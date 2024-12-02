import { Dimensions, ImageBackground, Text } from "react-native"
import { View } from "react-native"
import FlatPlayCard from "./FlatPlayCard/FlatPlayCard"
import mockCardImg1 from '../../assets/mockCardImg1.png'
import mockCardImg2 from '../../assets/mockCardImg2.png'
import { Image } from "react-native"
import ComButton from "../../shared/ComButton/ComButton"
import TopCard from "./FlatPlayCard/TopCard"

const HomeScreen = () => {
    return (
        <View className="w-full p-[20px]">
            <Text className="font-Comfortaa text-xl">Доброе утро, User!</Text>
            <Text className="font-Comfortaa text-lg text-[#A1A4B2]">Мы желаем вам хорошего дня</Text>
            <View className="flex flex-row justify-between gap-x-[20px] mt-[30px]">
                <TopCard image={mockCardImg1} title={"Основы"} subtitle={"Курс"} time_first={5} time_second={10} bg_color={"#8E97FD"}/>
                <TopCard image={mockCardImg2} title={"Основы"} subtitle={"Курс"} time_first={5} time_second={10} bg_color={"#FFDB9D"}/>
            </View>
            <FlatPlayCard />
            <Text className="font-Comfortaa text-xl mt-[40px]">Для тебя</Text>

        </View>
    )
}

export  default HomeScreen
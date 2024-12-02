import { View, Image, Text, Dimensions } from "react-native"
import ComButton from "../../../shared/ComButton/ComButton"

const TopCard = ({image, title, subtitle, time_first, time_second, bg_color}) => (
    <View className={`bg-[${bg_color}] ml-[20px] rounded-xl min-h-[210px]`} style={{ width: (Dimensions.get("screen").width / 2) - 20 - 15 }}>
        <Image source={image} className="ml-auto rounded-tr-xl " />
        <Text className="font-Comfortaa text-white px-[15px]">{title}</Text>
        <Text className="font-Comfortaa text-white px-[15px]">{subtitle}</Text>
        <View className="mt-auto flex flex-row justify-between items-center px-[15px] mb-[12px]">
            <Text className="font-Comfortaa text-white">{time_first}-{time_second} МИН</Text>
            <ComButton title="Начать" variant="secondary" className="p-2" textClassName="text-[12px]" />
        </View>
    </View>
)

export default TopCard
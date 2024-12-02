import { Text, TouchableOpacity } from "react-native"
import { ImageBackground, View } from "react-native"
import FaltCardBG from "../../../assets/faltCardBg.png"
import Play from '../../../assets/Play.svg'

const FlatPlayCard = () => {
    return (
        <ImageBackground source={FaltCardBG} className="z-[999] bg-[#333242] rounded-xl p-[20px] mt-[20px] flex justify-between items-center flex-row" borderRadius={30} >
                <View>
                    <Text className="font-Comfortaa text-white text-lg">Повседневные мысли</Text>
                    <Text className="font-Comfortaa text-white">Медитация - 3-10 МИН</Text>
                </View>
                <TouchableOpacity className="rounded-full bg-white w-[40px] h-[40px] flex justify-center items-center">
                    <Play width={12} height={12}/>
                </TouchableOpacity>
            </ImageBackground>
    )
}

export default FlatPlayCard
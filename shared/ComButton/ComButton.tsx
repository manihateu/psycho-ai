import { Pressable, StyleProp, Text, ViewStyle } from "react-native"
import Loader from "../Loader/Loader"

type TComButtonProps = {
    style?: StyleProp<ViewStyle>,
    variant?: "primary" | "secondary",
    onPress?: () => void,
    isLoading?: boolean,
    className?: string,
    title: string
}

const ComButton = ({style, variant = 'primary', onPress, isLoading, className, title}: TComButtonProps) => {
    return (
        <Pressable disabled={isLoading} onPress={onPress} style={style} className={`${variant == "primary" ? "bg-[#8E97FD]" : "bg-[#EBEAEC]"} flex justify-center items-center p-3 rounded-full ${className}`}>
            
            {
                isLoading ? <Loader/> :
                <Text className={`${variant == 'primary' ? 'text-white' : 'text-[#3F414E]'} font-Comfortaa text-[16px]`}>
                {
                    title
                }
                </Text>
            }    
            
        </Pressable>
    )
}

export default ComButton
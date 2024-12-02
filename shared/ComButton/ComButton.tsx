import { Pressable, StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native"
import Loader from "../Loader/Loader"

type TComButtonProps = {
    style?: StyleProp<ViewStyle>,
    variant?: "primary" | "secondary",
    onPress?: () => void,
    isLoading?: boolean,
    className?: string,
    title: string,
    size?: 'large' | 'medium' | 'small'
}

const ComButton = ({style, variant = 'primary', onPress, isLoading, className, title, size}: TComButtonProps) => {
    const sizes = {
        "large": "h-20",
        "medium": "h-16",
        "small": ""
    }

    return (
        <TouchableOpacity disabled={isLoading} onPress={onPress} style={style} className={`${variant == "primary" ? "bg-[#8E97FD]" : "bg-[#EBEAEC]"} flex justify-center items-center p-3 rounded-full ${className} ${size ? sizes[size] : null}`}>
            
            {
                isLoading ? <Loader/> :
                <Text className={`${variant == 'primary' ? 'text-white' : 'text-[#3F414E]'} font-Comfortaa text-[16px]`}>
                {
                    title
                }
                </Text>
            }    
            
        </TouchableOpacity>
    )
}

export default ComButton
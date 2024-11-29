import { Pressable, StyleProp, ViewStyle } from "react-native"

type TComButtonProps = {
    style?: StyleProp<ViewStyle>,
    variant?: "primary" | "secondary",
    onPress?: () => void,
    isLoading?: boolean,
    className: string,
    title: string
}

const ComButton = ({style, variant, onPress, isLoading, className, title}: TComButtonProps) => {
    return (
        <Pressable onPress={onPress} style={style} className={`  ${className}`}>
            
        </Pressable>
    )
}

export default ComButton
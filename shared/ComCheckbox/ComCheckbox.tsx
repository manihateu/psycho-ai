import { Pressable, StyleSheet, View } from "react-native"
import CheckSVG from '../../assets/check.svg'

type TComCheckboxProps = {
    checked: boolean
    setChecked: any
}

const ComCheckbox = ({checked, setChecked}: TComCheckboxProps) => {
    const handleCheckboxPress = () => {
        setChecked(!checked) 
    } 
    return (
            <Pressable onPress={handleCheckboxPress}> 
                <View className={`w-[25px] h-[25px] flex justify-center items-center rounded-lg border border-2 border-[#4444ff] ${checked ? "bg-[#4444ff]" : ""}`}>
                    {checked && <CheckSVG width={45} height={45} style={{marginLeft: 10, marginBottom: 10}} className=""/>}
                </View>
            </Pressable> 
    )
} 

export default ComCheckbox
import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import Accept from '../../assets/accept.svg'
import Visible from '../../assets/visible.svg'
import NoneVisible from '../../assets/isNoneVisible.svg'

type TComInputProps = {
    placeholder: string,
    className?: string,
    isPassword?: boolean,
    isAccepted?: boolean,
    value: string,
    onChange: (text: any) => void
}

const ComInput = ({placeholder, className, isPassword, isAccepted, value, onChange} : TComInputProps) => {
    const [visible, setVisible] = useState <boolean> (false)

    return (
    <View className='relative'>
        <TextInput onChange={onChange} secureTextEntry={isPassword ? visible : false} value={value} placeholder={placeholder} className='bg-[#F2F3F7] p-[20px] rounded-2xl font-Comfortaa'/>   
        <View className='absolute right-[20px] h-full flex justify-center '>
            {
                (isAccepted && !isPassword) && <Accept width={24} height={24}/>
            }
            {
                isPassword && (visible ? 
                <Pressable onPress={() => {setVisible(false)}}>
                    <Visible width={24} height={24}/>
                </Pressable>
                 : 
                 <Pressable onPress={() => {setVisible(true)}}>
                    <NoneVisible width={24} height={24}/> 
                 </Pressable>)
            }     
        </View>
    </View>
  )
}

export default ComInput
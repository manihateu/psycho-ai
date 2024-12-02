import React, { useEffect, useState } from 'react'
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView'
import LoginBG from '../../assets/LoginBackground.png'
import ComInput from '../../shared/ComInput/ComInput'
import ComButton from '../../shared/ComButton/ComButton'
import ComCheckbox from '../../shared/ComCheckbox/ComCheckbox'
import Arrow from '../../assets/BackArrow.svg'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../../components/RootNavigator/RootNavigator'

const SignUpScreen = () => {
    const [checked, setChecked] = useState(false);
    const {goBack, navigate} = useNavigation<StackNavigation>()
    useEffect(() => {
        StatusBar.setBackgroundColor("#FFFFFF", true)
    }, [])
  return (
    <ComSafeAreaView className='bg-white'>
        <TouchableOpacity onPress={goBack} className='absolute rounded-full border border-[1px] border-[#EBEAEC] w-[55px] h-[55px] z-[999] bg-white top-[20px] left-[20px] flex justify-center items-center'>
            <Arrow width={18} height={18}/>
        </TouchableOpacity>
        <View className='h-1/3'>
            <ImageBackground source={LoginBG} className='w-full h-full flex justify-center items-center'>
                <Text className='font-Comfortaa text-[28px]'>Создать аккаунт</Text>
            </ImageBackground>
        </View>
        <View className='px-[20px]'>
            <ComInput placeholder='Имя' value="" onChange={() => {}} classNames='mt-5'/>
            <ComInput placeholder='Email' value="" onChange={() => {}} classNames='mt-5'/>
            <ComInput placeholder='Пароль' isPassword value="" onChange={() => {}} classNames='mt-5'/>
            <View className='mt-[20px] flex flex-row justify-between'>
                <Text className='font-Comfortaa'>Я прочитал(а) <Text className='text-[#7583CA]'>Правила использования</Text></Text>
                <ComCheckbox checked={checked} setChecked={setChecked}/>
            </View>
            <ComButton title="Начнем!" className='mt-[30px]' size='medium' onPress={() => {navigate("WelcomeScreen")}}/>
        </View>
        
    </ComSafeAreaView>
  )
}

export default SignUpScreen

import { ImageBackground, Pressable, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView'
import LoginBG from '../../assets/LoginBackground.png'
import ComInput from '../../shared/ComInput/ComInput'
import ComButton from '../../shared/ComButton/ComButton'
import Arrow from '../../assets/BackArrow.svg'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

const LoginScreen = () => {
    const {goBack} = useNavigation();
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
                <Text className='font-Comfortaa text-[28px]'>Добро пожаловать!</Text>
            </ImageBackground>
        </View>
        <View className='px-[20px]'>
            <ComInput placeholder='Email' value="" onChange={() => {}} classNames='mt-5'/>
            <ComInput placeholder='Пароль' isPassword value="" onChange={() => {}} classNames='mt-5'/>
            <ComButton title="Начнем!" className='mt-[30px]' size='medium'/>
            <Text className='font-Comfortaa mt-[20px] underline text-center'>Забыли пароль?</Text>
        </View>
        <View className='flex flex-row w-full px-1 justify-center mt-auto mb-[60px]'>
          <Text className='font-Comfortaa text-gray-400 mr-2'>
            Еще нет аккаунта?
          </Text>
          <Pressable onPress={() => {}}>
            <Text className='font-Comfortaa text-blue-600'>
              Зарегистрироваться
            </Text>
          </Pressable>
        </View>
    </ComSafeAreaView>
  )
}

export default LoginScreen
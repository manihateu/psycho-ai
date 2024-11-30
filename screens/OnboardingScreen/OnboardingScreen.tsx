import React, { Children } from 'react'
import { Image, ImageBackground, Text } from 'react-native'
import { View } from 'react-native'
import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView'
import OnboardingLogo from '../../assets/OnboardingLogo.png'
import Logo from '../../assets/logo.svg'
import OnboardingBg from '../../assets/OnboardingBg.png'
import ComButton from '../../shared/ComButton/ComButton'

const OnboardingScreen = () => {
  return (
        <ComSafeAreaView style={{backgroundColor: '#fff'}}>
          <ImageBackground source={OnboardingBg} className='flex-1 h-3/5'>
            
          <View className='w-full flex p-3 flex-row items-center mt-10 justify-center'>
            <Text className='font-Comfortaa min-w-[102px] mr-[8px]'>Ментальный</Text>
            <Logo width={30} height={30} />
            <Text className='font-Comfortaa min-w-[102px] ml-[8px]'>Помощник</Text>
            </View>
              <View className='flex items-center mt-16'>
                <Image source={OnboardingLogo}/>
              </View>
              <View className='flex mt-36 items-center'>
                <Text className='font-Comfortaa text-2xl'>
                  Начни работу с себя
                </Text>
                <Text className='mt-4 font-Comfortaa text-gray-400 text-base text-center'>
                  Создано для поддержки ментального здоровья работников РЖД
                </Text>
              </View>
              <View className='mt-14 w-full'>
                <ComButton title='Зарегистрироваться' className='m-3 h-16'/>
              </View>
              <View className='flex items-center'>
                <Text className='font-Comfortaa text-gray-400'>
                  Уже есть аккаунт?
                </Text>
              </View>
            
          </ImageBackground>
            
          
          
          
        </ComSafeAreaView>
  )
}

export default OnboardingScreen
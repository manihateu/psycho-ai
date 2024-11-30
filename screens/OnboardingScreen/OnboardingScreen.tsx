import React, { Children } from 'react'
import { Button, Image, ImageBackground, Pressable, StatusBar, Text } from 'react-native'
import { View } from 'react-native'
import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView'
import OnboardingLogo from '../../assets/OnboardingLogo.png'
import Logo from '../../assets/logo.svg'
import OnboardingBg from '../../assets/OnboardingBg.png'
import ComButton from '../../shared/ComButton/ComButton'
import { ComAnimatedAppearance } from '../../shared/ComAnimatedAppearance/ComAnimatedAppearance'

const OnboardingScreen = () => {
  return (
        <ComSafeAreaView style={{backgroundColor: '#fff'}}>
          <ImageBackground source={OnboardingBg} className='flex-1 h-3/5'>
            
          <View className={`w-full flex p-3 flex-row items-center mt-[${StatusBar.currentHeight ? 50 - StatusBar.currentHeight : 30}px] justify-center mt-10`}>           
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
              </View>
              <View className='flex mt-4 mb-14'>
                <Text className='w-full font-Comfortaa text-gray-400 text-base px-[18px] text-center'>
                  Создано для поддержки ментального здоровья работников РЖД
                </Text>
              </View>
                
              
              <ComAnimatedAppearance className=' w-full'>
                <ComButton title='Зарегистрироваться' className='mx-3 my-2 h-16'/>
              </ComAnimatedAppearance>
              <View className='flex flex-row w-full px-1 justify-center  '>
                <Text className='font-Comfortaa text-gray-400 mr-2'>
                  Уже есть аккаунт?
                </Text>
                <Pressable >
                  <Text className='font-Comfortaa text-blue-600'>
                    Войти
                  </Text>
                </Pressable>
              </View>
            
          </ImageBackground>
            
          
          
          
        </ComSafeAreaView>
  )
}

export default OnboardingScreen
import React, { useEffect } from 'react'
import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView'
import { StatusBar, Text, View } from 'react-native'
import Logo from '../../assets/logo.svg'
import LogoBtn from '../../assets/LogoBtn.svg'
import Profile from '../../assets/Profile.svg'
import Loon from '../../assets/Loon.svg'
import Music from '../../assets/Music.svg'
import Home from '../../assets/Home.svg'


type TLayoutProps = {
    children: any,
    canBack?: boolean,
}

const Layout = ({children, canBack} : TLayoutProps) => {
    useEffect(() => {
        StatusBar.setBackgroundColor("#FFFFFF", true) 
    }, [])
  return (
    <ComSafeAreaView style={{backgroundColor: '#fff'}}>
        <View className='w-full flex p-3 flex-row gap-x-[8px] items-center justify-center'>
            <Text className='font-Comfortaa min-w-[75]'>Ментальный</Text>
            <Logo width={30} height={30}/>
            <Text className='font-Comfortaa min-w-[75px]'>Помощник</Text>
        </View>
        <View className='flex-1 bg-white'>
            {children}
        </View>
        <View className='bg-white flex flex-row py-3 justify-around'>
            <View className='flex items-center gap-y-[8px] min-w-[70px]'>
                <Home width={30} height={30}/>
                <Text className='font-Comfortaa text-[#A0A3B1] '>Главная</Text>
            </View>
            <View className='flex items-center gap-y-[8px] min-w-[70px]'>
                <Loon width={30} height={30}/>
                <Text className='font-Comfortaa text-[#A0A3B1]'>Сон</Text>
            </View>
            <View className='flex items-center gap-y-[8px] min-w-[70px]'>
                <LogoBtn width={30} height={30}/>
                <Text className='font-Comfortaa text-[#A0A3B1]'>Помощник</Text>
            </View>
            <View className='flex items-center gap-y-[8px] min-w-[70px]'>
                <Music width={30} height={30}/>
                <Text className='font-Comfortaa text-[#A0A3B1]'>Музыка</Text>
            </View>
            <View className='flex items-center gap-y-[8px] min-w-[70px]'>
                <Profile width={30} height={30}/>
                <Text className='font-Comfortaa text-[#A0A3B1]'>Профиль</Text>
            </View>
        </View>
    </ComSafeAreaView>
  )
}

export default Layout
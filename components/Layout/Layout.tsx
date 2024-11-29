import React from 'react'
import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView'
import { Text, View } from 'react-native'
import Logo from '../../assets/logo.svg'
import LogoBtn from '../../assets/LogoBtn.svg'
import Profile from '../../assets/Profile.svg'
import Loon from '../../assets/Loon.svg'
import Music from '../../assets/Music.svg'
import Home from '../../assets/Home.svg'


type TLayoutProps = {
    children: any,
    name: string,
    canBack?: boolean,
}

const Layout = ({children, name, canBack} : TLayoutProps) => {
  return (
    <ComSafeAreaView style={{backgroundColor: 'White'}}>
        <View className='w-full flex p-3 flex-row gap-x-[8px] items-center justify-center'>
            <Text className='font-Comfortaa '>Ментальный</Text>
            <Logo width={30} height={30}/>
            <Text className='font-Comfortaa '>Помощник</Text>
        </View>
        <View className='flex-1 bg-white'>
            {children}
        </View>
        <View className='bg-white flex flex-row py-3 justify-around'>
            <View className='flex items-center gap-y-[8px]'>
                <Home width={30} heigth={30}/>
                <Text className='font-Comfortaa text-[#A0A3B1]'>Главная</Text>
            </View>
            <View className='flex items-center gap-y-[8px]'>
                <Loon width={30} heigth={30}/>
                <Text className='font-Comfortaa text-[#A0A3B1]'>Сон</Text>
            </View>
            <View className='flex items-center gap-y-[8px]'>
                <LogoBtn width={30} heigth={30}/>
                <Text className='font-Comfortaa text-[#A0A3B1]'>Помощник</Text>
            </View>
            <View className='flex items-center gap-y-[8px]'>
                <Music width={30} heigth={30}/>
                <Text className='font-Comfortaa text-[#A0A3B1]'>Музыка</Text>
            </View>
            <View className='flex items-center gap-y-[8px]'>
                <Profile width={30} heigth={30}/>
                <Text className='font-Comfortaa text-[#A0A3B1]'>Профиль</Text>
            </View>
        </View>
    </ComSafeAreaView>
  )
}

export default Layout
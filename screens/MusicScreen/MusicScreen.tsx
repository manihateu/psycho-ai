import { Dimensions, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native"
import All from '../../assets/AllFilterIcon.svg'
import Liked from '../../assets/LikedFilterIcon.svg'
import Kids from '../../assets/KidsFilterIcon.svg'
import Anxioumus from '../../assets/AnxiomusFilterIcon.svg'
import { BlurView } from "expo-blur"
import React from "react"

const MusicScreen = () => {
    return (
        <>
            <Text className="text-center font-ComfortaaBold text-[28px] mt-[15px]">Музыка</Text>
            <Text className="text-center font-Comfortaa text-[16px] mt-[15px]">Медитируй с помомщью музыки</Text>
            <ScrollView horizontal className="px-3 mt-[15px] mb-[15px] min-h-[90px]">
                <TouchableOpacity className="flex items-center">
                    <View className="bg-[#8E97FD] rounded-3xl flex items-center justify-center p-[20px]">
                        <All width={25} height={25}/>
                    </View>
                    <Text className="font-ComfortaaBold text-[16px]">Все</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex items-center ml-5">
                    <View className="bg-[#A0A3B1] rounded-3xl flex items-center justify-center p-[20px]">
                        <Liked width={25} height={25}/>
                    </View>
                    <Text className="font-ComfortaaBold text-[16px] text-gray-400">Мое</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex items-center ml-5">
                    <View className="bg-[#A0A3B1] rounded-3xl flex items-center justify-center p-[20px]">
                        <Kids width={25} height={25}/>
                    </View>
                    <Text className="font-ComfortaaBold text-[16px] text-gray-400">Детям</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex items-center ml-5">
                    <View className="bg-[#A0A3B1] rounded-3xl flex items-center justify-center p-[20px]">
                        <Anxioumus width={25} height={25}/>
                    </View>
                    <Text className="font-ComfortaaBold text-[16px] text-gray-400">Тревога</Text>
                </TouchableOpacity>
            </ScrollView>
            <ScrollView  className="px-[14px] pt-[15px]">
                <View className="flex flex-row justify-center w-full mb-3">
                    <ImageBackground source={{ uri: 'https://a.d-cd.net/10e9348s-960.jpg' }} imageStyle={{borderRadius: 16}} className="min-h-[200px]" style={{width: Dimensions.get('screen').width / 2 - 14}}>
                        <BlurView intensity={100}  className="mt-auto w-full p-3 rounded-b-2xl">
                            <Text className="font-ComfortaaBold">7 дней расслабления</Text>
                        </BlurView>
                    </ImageBackground>
                    <ImageBackground source={{ uri: 'https://a.d-cd.net/10e9348s-960.jpg' }} imageStyle={{borderRadius: 16}} className="min-h-[200px] ml-3" style={{width: Dimensions.get('screen').width / 2 - 14}}>
                        <BlurView intensity={100}  className="mt-auto w-full p-3 rounded-b-2xl">
                            <Text className="font-ComfortaaBold">7 дней расслабления</Text>
                        </BlurView>
                    </ImageBackground>
                </View>
                <View className="flex flex-row justify-center w-full mb-3">
                    <ImageBackground source={{ uri: 'https://a.d-cd.net/10e9348s-960.jpg' }} imageStyle={{borderRadius: 16}} className="min-h-[200px]" style={{width: Dimensions.get('screen').width / 2 - 14}}>
                        <BlurView intensity={100}  className="mt-auto w-full p-3 rounded-b-2xl">
                            <Text className="font-ComfortaaBold">7 дней расслабления</Text>
                        </BlurView>
                    </ImageBackground>
                    <ImageBackground source={{ uri: 'https://a.d-cd.net/10e9348s-960.jpg' }} imageStyle={{borderRadius: 16}} className="min-h-[200px] ml-3" style={{width: Dimensions.get('screen').width / 2 - 14}}>
                        <BlurView intensity={100}  className="mt-auto w-full p-3 rounded-b-2xl">
                            <Text className="font-ComfortaaBold">7 дней расслабления</Text>
                        </BlurView>
                    </ImageBackground>
                </View>
                <View className="flex flex-row justify-center w-full  mb-3">
                    <ImageBackground source={{ uri: 'https://a.d-cd.net/10e9348s-960.jpg' }} imageStyle={{borderRadius: 16}} className="min-h-[200px]" style={{width: Dimensions.get('screen').width / 2 - 14}}>
                        <BlurView intensity={100}  className="mt-auto w-full p-3 rounded-b-2xl">
                            <Text className="font-ComfortaaBold">7 дней расслабления</Text>
                        </BlurView>
                    </ImageBackground>
                    <ImageBackground source={{ uri: 'https://a.d-cd.net/10e9348s-960.jpg' }} imageStyle={{borderRadius: 16}} className="min-h-[200px] ml-3" style={{width: Dimensions.get('screen').width / 2 - 14}}>
                        <BlurView intensity={100}  className="mt-auto w-full p-3 rounded-b-2xl">
                            <Text className="font-ComfortaaBold">7 дней расслабления</Text>
                        </BlurView>
                    </ImageBackground>
                </View>
            </ScrollView>
        </>
    )
}

export default MusicScreen
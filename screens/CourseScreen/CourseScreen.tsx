
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import MockBgCourse from '../../assets/mock-bg-course.png';
import Like from '../../assets/like.svg';
import Download from '../../assets/download.svg';
import Favorites from '../../assets/favorits.svg';
import Listening from '../../assets/listening.svg';
import Play from '../../assets/Play.svg';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useGetCourseByIdQuery } from '../../store/api/courses.api';

const CourseScreen = ({}) => {
    const {params} = useRoute()
    const {data, isLoading, error} = useGetCourseByIdQuery(params ? params.id : 0)
    console.log(params.id)
    return isLoading ? 
        <>
            <Text>Loading</Text>
        </>
        :
        error ?
            <Text>Error</Text>
            :
            <>
            <View className="absolute flex flex-row items-center top-[20px] right-[20px] z-[999] gap-x-2">
                    <TouchableOpacity
                        className="p-[20px] rounded-full"
                        style={{ backgroundColor: 'rgba(3, 23, 76, 0.5)' }}
                    >
                        <Like width={18} height={18} className="opacity-[1]" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="p-[20px] rounded-full"
                        style={{ backgroundColor: 'rgba(3, 23, 76, 0.5)' }}
                    >
                        <Download width={18} height={18} className="opacity-[1]" />
                    </TouchableOpacity>
                </View>
                <Image source={{uri: data?.cardBgUrl}} className="w-full rounded-b-xl" />
                <View className="px-[20px] mt-3">
                    <Text className="text-[34px] font-Comfortaa mb-[15px]">{data?.name}</Text>
                    <Text className="text-[14px] font-Comfortaa text-[#A1A4B2] uppercase mb-[20px]">
                        {data?.type}
                    </Text>
                    <Text className="text-[16px] font-Comfortaa mb-3">
                        {data?.description}
                    </Text>
                    <View className="flex flex-row justify-between mb-[30px]">
                        <View className="flex flex-row items-center">
                            <Favorites width={16} height={16} />
                            <Text className="ml-3 font-Comfortaa">{data?.countLiked} Понравилось</Text>
                        </View>
                        <View className="flex flex-row items-center">
                            <Listening width={16} height={16} />
                            <Text className="ml-3 font-Comfortaa">{data?.countListened} Прослушано</Text>
                        </View>
                    </View>
                    
                    <ScrollView className='mt-3'>
                        <View className="flex flex-row">
                            <TouchableOpacity className="p-[14px] rounded-full border flex items-center justify-center">
                                <Play width={12} height={12} />
                            </TouchableOpacity>
                            <View className="ml-[20px] flex flex-col">
                                <Text className="font-Comfortaa">Фокус</Text>
                                <Text className="font-Comfortaa">10 МИН</Text>
                            </View>
                        </View>
                        <View className="h-[0.5] mx-3 bg-[#ADB8D9] my-3"></View>

                        <View className="flex flex-row">
                            <TouchableOpacity className="p-[14px] rounded-full border flex items-center justify-center">
                                <Play width={12} height={12} />
                            </TouchableOpacity>
                            <View className="ml-[20px] flex flex-col">
                                <Text className="font-Comfortaa">Фокус</Text>
                                <Text className="font-Comfortaa">10 МИН</Text>
                            </View>
                        </View>
                        <View className="h-[0.5] mx-3 bg-[#ADB8D9] mt-3"></View>
                    </ScrollView>
                </View>
        </>
}

export default CourseScreen
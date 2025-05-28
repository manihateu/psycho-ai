import {
    Dimensions,
    Platform,
    RefreshControl,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';
import { View } from 'react-native';
import Play from '../../assets/Play.svg';
import logo from '../../assets/logo.png';
import ErrorIcon from '../../assets/error.svg'
import { Image } from 'react-native';
import { useGetUserQuery } from '../../store/api/authorizeApiSlice';
import Skeleton from '../../shared/ComSkeleton/ComSkeleton';
import React, { useState } from 'react';
import ComCourseModal from '../../shared/ComCourseModal/ComCourseModal';
import { useGetRecomendationsQuery } from '../../store/api/courses.api';
import { TCourse } from './model/course.model';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

const Phrases: { [key: string]: string } = {
    "21": "Доброй ночи",
    "22": "Доброй ночи",
    "23": "Доброй ночи",
    "00": "Доброй ночи",
    "01": "Доброй ночи",
    "02": "Доброй ночи",
    "03": "Доброй ночи",
    "04": "Доброй ночи",
    "05": "Доброй ночи",
    "06": "Доброе утро",
    "07": "Доброе утро",
    "08": "Доброе утро",
    "09": "Доброе утро",
    "10": "Доброе утро",
    "11": "Доброе утро",
    "12": "Добрый день",
    "13": "Добрый день",
    "14": "Добрый день",
    "15": "Добрый день",
    "16": "Добрый день",
    "17": "Добрый вечер",
    "18": "Добрый вечер",
    "19": "Добрый вечер",
    "20": "Добрый вечер",
}

const HomeScreen = () => {
    const { data, error, isLoading, refetch, isFetching } = useGetUserQuery({});
    const {data: recomendations, error: recError, isLoading: recIsLoading, refetch: refetchrec, isFetching: recIsFetching} = useGetRecomendationsQuery(5)
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        refetch()
        refetchrec()
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
    const navigation = useNavigation()
    console.log("rec", recomendations)
    const thisDate = new Date().toString()
    const idx = thisDate.split(" ")[4].split(":")[0];
    const greet: string = Phrases[idx] as string;
    const [openModal, setOpenModal] = useState(false);
    console.log(data)
    return (
        <>
            <ScrollView className="w-full" refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                <View className="">
                    <View className='flex flex-row items-center gap-x-2 px-2 mt-2'>
                        <Image source={logo} className='w-[60px] h-[60px]'/>
                        <View className='bg-[#46DFB1] rounded-2xl h-[60px] flex-col justify-center'>
                            <Text className="font-Comfortaa px-4">
                                {greet}, {isLoading || isFetching ? <Skeleton style={{}} /> : data.name}!
                            </Text>
                            <Text className="font-Comfortaa px-4">
                                Чем могу помочь?
                            </Text>
                        </View>
                    </View>

                    <View className="px-[8px]">
                        <BlurView intensity={80} tint="light" className={`${Platform.OS == 'ios' ? "rounded-full" : "rounded-3xl"} bg-gray-200 mt-2 p-4`} >
                            <View className='flex-row justify-between'>
                                <View className='p-4 rounded-3xl bg-[#09D1C7]' style={{width: Dimensions.get('screen').width / 2 - 8 - 20 }}>
                                    <View className='rounded-full bg-white w-[36px] h-[36px] items-center justify-center mb-4'>
                                        <Play className='w-[30px] h-[30px]'/>
                                    </View>
                                    <View className='flex flex-col gap-y-1 mt-auto'>
                                        <Text className='font-ComfortaaBold'>Основы</Text>
                                        <Text className='font-Comfortaa text-xs'>Курс</Text>
                                    </View>
                                </View>
                                <View className='p-4 rounded-3xl bg-white' style={{width: Dimensions.get('screen').width / 2 - 8 - 20 }}>
                                    <View className='rounded-full bg-[#46DFB1] w-[36px] h-[36px] items-center justify-center mb-4'>
                                        <Play className='w-[30px] h-[30px]'/>
                                    </View>
                                    <View className='flex flex-col gap-y-1 mt-auto'>
                                        <Text className='font-ComfortaaBold'>Основы</Text>
                                        <Text className='font-Comfortaa text-xs'>Курс</Text>
                                    </View>
                                </View>
                            </View>
                            <View className='mt-2 bg-white rounded-full p-2 flex flex-row items-center'>
                                <View className='rounded-full bg-gray-200 w-[36px] h-[36px] items-center justify-center'>
                                    <Play className='w-[30px] h-[30px]'/>
                                </View>
                                <Text className='ml-2 font-ComfortaaBold'>Повседневне мысли</Text>
                            </View>
                            
                        </BlurView>
                    </View>
                    <Text className="font-Comfortaa text-xl mt-2 px-2">Для тебя</Text>
                </View>

                <ScrollView horizontal className="mt-2">
                    {recIsLoading || recIsFetching ? new Array(5).fill(0).map((val, idx)=> (
                        <View key={idx} className="mx-[8px]">
                            <Skeleton style={{width: 164, height: 115}}/>
                            <Skeleton style={{width: 100, height: 11, marginTop: 11}}/>
                            <Skeleton style={{width: 100, height: 11, marginTop: 11}}/>
                        </View>
                    )) : 
                        !recomendations || recomendations.length == 0 || recError ?
                            <View className='flex flex-col w-screen my-[16px] items-center justify-center'>
                                <ErrorIcon width={24} height={24}/>
                                <Text className='font-ComfortaaBold text-lg'>Ошибка</Text>
                            </View>
                            :
                            recomendations.map((recomendation: TCourse) => (
                                <TouchableOpacity className="mx-[8px]" onPress={() => {navigation.navigate("CourseScreen", {id: recomendation.id})}}>
                                    <Image source={{uri: "https://psycho-ai.dev.developercup.tech" + recomendation.cardLogoUrl}} className={`w-[162px] h-[115px] rounded-xl bg-[${recomendation.cardLogoBgColor}]`} />
                                    <Text className="mt-[11px] font-Comfortaa">{recomendation.name}</Text>
                                    <Text className=" font-Comfortaa text-[#A1A4B2]">{recomendation.type} {recomendation.timeFrom}-{recomendation.timeTo} МИН</Text>
                                </TouchableOpacity>
                            ))
                            
                    }
                </ScrollView>
            </ScrollView>
            <ComCourseModal open={openModal} setOpen={setOpenModal} />
        </>
    );
};

export default HomeScreen;

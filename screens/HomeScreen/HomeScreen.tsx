import {
    RefreshControl,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';
import { View } from 'react-native';
import FlatPlayCard from './FlatPlayCard/FlatPlayCard';
import mockCardImg1 from '../../assets/mockCardImg1.png';
import mockCardImg2 from '../../assets/mockCardImg2.png';
import mockCardBottom from '../../assets/mainCardBgMock.png';
import ErrorIcon from '../../assets/error.svg'
import { Image } from 'react-native';
import TopCard from './FlatPlayCard/TopCard';
import { useGetUserQuery } from '../../store/api/authorizeApiSlice';
import Skeleton from '../../shared/ComSkeleton/ComSkeleton';
import React, { useState } from 'react';
import ComCourseModal from '../../shared/ComCourseModal/ComCourseModal';
import { useGetRecomendationsQuery } from '../../store/api/courses.api';
import { TCourse } from './model/course.model';
import { useNavigation } from '@react-navigation/native';

const Phrases = {
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
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <ScrollView className="w-full" refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                <View className="">
                    <Text className="font-Comfortaa text-xl px-[8px]">
                        {Phrases[thisDate.split(" ")[4].split(":")[0]]}, {isLoading || isFetching ? <Skeleton style={{}} /> : data.name}!
                    </Text>
                    <Text className="font-Comfortaa text-lg text-[#A1A4B2] px-[8px]">
                        Мы желаем вам хорошего дня
                    </Text>
                    <View className="px-[8px]">
                        <View className="flex flex-row justify-between mt-[30px]">
                            <TopCard
                                onPress={() => {
                                    setOpenModal(true);
                                }}
                                image={mockCardImg1}
                                title={'Основы'}
                                subtitle={'Курс'}
                                time_first={5}
                                time_second={10}
                                classNames="bg-[#8E97FD]"
                            />
                            <TopCard
                                onPress={() => {
                                    setOpenModal(true);
                                }}
                                image={mockCardImg2}
                                title={'Основы'}
                                subtitle={'Курс'}
                                time_first={5}
                                time_second={10}
                                classNames="bg-[#FFC97E]"
                            />
                        </View>
                    </View>

                    <FlatPlayCard />
                    <Text className="font-Comfortaa text-xl mt-[40px] px-2">Для тебя</Text>
                </View>

                <ScrollView horizontal className="mt-[20px]">
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
                                    <Image source={{uri: recomendation.cardLogoUrl}} className={`w-[162px] h-[115px] rounded-xl bg-[${recomendation.cardLogoBgColor}]`} />
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

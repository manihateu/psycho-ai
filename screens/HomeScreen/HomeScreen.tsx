import {
    Dimensions,
    FlatList,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';
import { View } from 'react-native';
import FlatPlayCard from './FlatPlayCard/FlatPlayCard';
import mockCardImg1 from '../../assets/mockCardImg1.png';
import mockCardImg2 from '../../assets/mockCardImg2.png';
import mockCardBottom from '../../assets/mainCardBgMock.png';
import { Image } from 'react-native';
import TopCard from './FlatPlayCard/TopCard';
import { useGetUserQuery } from '../../store/api/authorizeApiSlice';
import Skeleton from '../../shared/ComSkeleton/ComSkeleton';
import React, { useState } from 'react';
import ComCourseModal from '../../shared/ComCourseModal/ComCourseModal';

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
    const { data, error, isLoading } = useGetUserQuery({});
    const thisDate = new Date().toString()
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <ScrollView className="w-full">
                <View className="">
                    <Text className="font-Comfortaa text-xl px-[8px]">
                        {Phrases[thisDate.split(" ")[4].split(":")[0]]}, {isLoading ? <Skeleton style={{}} /> : data.name}!
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
                    <TouchableOpacity className="mx-[8px]">
                        <Image source={mockCardBottom} className="w-[162px] h-[115px] rounded-xl" />
                        <Text className="mt-[11px] font-Comfortaa">Фокус</Text>
                        <Text className=" font-Comfortaa text-[#A1A4B2]">Медитация 3-10 МИН</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="mx-[8px]">
                        <Image source={mockCardBottom} className="w-[162px] h-[115px] rounded-xl" />
                        <Text className="mt-[11px] font-Comfortaa">Фокус</Text>
                        <Text className=" font-Comfortaa text-[#A1A4B2]">Медитация 3-10 МИН</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ScrollView>
            <ComCourseModal open={openModal} setOpen={setOpenModal} />
        </>
    );
};

export default HomeScreen;

import React, { Children } from 'react';
import { Button, Image, ImageBackground, Pressable, StatusBar, Text } from 'react-native';
import { View } from 'react-native';
import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView';
import OnboardingLogo from '../../assets/OnboardingLogo.png';
import Logo from '../../assets/newlogo.png';
import Icocehadron from '../../assets/Icosahedron.png'
import Cone from '../../assets/Cone.png'
import Helix from '../../assets/Helix.png'
import Sphere from '../../assets/Sphere.png'
import Thorus from '../../assets/Thorus 1.png'
import Cilynder from '../../assets/Cylinder 2.png'
import Pyramid from '../../assets/Pyramid 1.png'
import ThorusKnot from '../../assets/Thorus Knot.png'
import OnboardingBg from '../../assets/OnboardingBg.png';
import ComButton from '../../shared/ComButton/ComButton';
import { ComAnimatedAppearance } from '../../shared/ComAnimatedAppearance/ComAnimatedAppearance';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../components/RootNavigator/RootNavigator';
import LinearGradient from 'react-native-linear-gradient';

const OnboardingScreen = () => {
    const { navigate } = useNavigation<StackNavigation>();
    return (
        <ComSafeAreaView style={{ backgroundColor: '#fff' } as any}>
            {/* <ImageBackground source={OnboardingBg} className="flex-1 h-3/5">
                <View
                    className={`w-full flex p-3 flex-row items-center mt-[${StatusBar.currentHeight ? 50 - StatusBar.currentHeight : 30}px] justify-center`}
                >
                    <Text className="font-Comfortaa min-w-[102px] mr-[8px]">Ментальный</Text>
                    <Logo width={30} height={30} />
                    <Text className="font-Comfortaa min-w-[102px] ml-[8px]">Помощник</Text>
                </View>
                <View className="flex items-center mt-16 absolute w-full">
                    <Image source={OnboardingLogo} className="w-full" />
                </View>
                <View className="flex-1 justify-center">
                    <View className="flex mt-36 items-center">
                        <Text className="font-Comfortaa text-2xl">Начни работу с себя</Text>
                    </View>
                    <View className="flex mt-4 mb-14">
                        <Text className="w-full font-Comfortaa text-gray-400 text-base px-[18px] text-center">
                            Создано для поддержки ментального здоровья работников РЖД
                        </Text>
                    </View>
                    <ComAnimatedAppearance className=" w-full">
                        <ComButton
                            onPress={() => navigate('SignUpScreen')}
                            title="Зарегистрироваться"
                            className="mx-3 my-2"
                            size="medium"
                        />
                    </ComAnimatedAppearance>
                    <View className="flex flex-row w-full px-1 justify-center">
                        <Text className="font-Comfortaa text-gray-400 mr-2">Уже есть аккаунт?</Text>
                        <Pressable onPress={() => navigate('LoginScreen')}>
                            <Text className="font-Comfortaa text-blue-600">Войти</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground> */}
            <View className='flex-1 items-center'>
                <View 
                    //  colors={['#800080', '#FFFFFF']}
                    //  start={{ x: 0.5, y: 0.5 }} 
                    //  end={{ x: 1, y: 1 }} 
                    className='border-2 rounded-full p-[70px] relative border-[#ECECEC]'>
                    <View className='border-2 rounded-full p-[70px] relative border-[#ECECEC]'>
                        <View className='border-2 rounded-full p-[70px] border-[#ECECEC]'>
                            <Image source={Logo} className='rounded-xl'/>
                        </View>
                        <Image source={Icocehadron} className='absolute top-[-35px] left-[130px] w-[70px] h-[70px]'/>
                        <Image source={Cone} className='absolute top-[15px] left-[245px] w-[70px] h-[70px]'/>
                        <Image source={Helix} className='absolute top-[135px] left-[300px] w-[70px] h-[70px]'/>
                        <Image source={Sphere} className='absolute top-[255px] left-[245px] w-[70px] h-[70px]'/>
                        <Image source={Thorus} className='absolute bottom-[-35px] left-[130px] w-[70px] h-[70px]'/>
                        <Image source={Cilynder} className='absolute top-[255px] left-[15px] w-[70px] h-[70px]'/>
                        <Image source={Pyramid} className='absolute top-[135px] left-[-30px] w-[70px] h-[70px]'/>
                        <Image source={ThorusKnot} className='absolute top-[15px] left-[15px] w-[70px] h-[70px]'/>
                    </View>
                </View>
            </View>
            <ComAnimatedAppearance className="flex-1 justify-center">
                    <View className="flex items-center">
                        <Text className="font-Comfortaa text-2xl">Начни работу с себя</Text>
                    </View>
                    <View className="flex mt-4 mb-14">
                        <Text className="w-full font-Comfortaa text-gray-400 text-base px-[18px] text-center">
                            Создано для поддержки ментального здоровья 
                            {/* работников РЖД */}
                        </Text>
                    </View>
                    <View className=" w-full">
                        <ComButton
                            onPress={() => navigate('SignUpScreen')}
                            title="Зарегистрироваться"
                            className="mx-3 my-2"
                            size="medium"
                        />
                    </View>
                    <View className="flex flex-row w-full px-1 mt-3 mb-5 justify-center">
                        <Text className="font-Comfortaa text-gray-400 mr-2">Уже есть аккаунт?</Text>
                        <Pressable onPress={() => navigate('LoginScreen')}>
                            <Text className="font-Comfortaa text-blue-600">Войти</Text>
                        </Pressable>
                    </View>
                </ComAnimatedAppearance>
        </ComSafeAreaView>
    );
};

export default OnboardingScreen;

import { ImageBackground, SafeAreaView, StatusBar, Text, View } from 'react-native';
import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView';
import DarkLogo from '../../assets/logo.png';
import WelcomeBG from '../../assets/testBgWelcome.png';
import ComButton from '../../shared/ComButton/ComButton';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../components/RootNavigator/RootNavigator';
import { Image } from 'react-native';
import { ComAnimatedAppearance } from '../../shared/ComAnimatedAppearance/ComAnimatedAppearance';
const WelcomeScreen = () => {
    const navigation = useNavigation<StackNavigation>();
    return (
        <SafeAreaView className="bg-[#8E97FD]">
            <View className="h-full">
                <Image source={WelcomeBG} className='w-full h-1/2 my-auto'/>
                <ComAnimatedAppearance classNames='bg-white m-3 rounded-3xl py-3 gap-y-5'>
                    <View className="w-full px-[11px]">
                        <Text className="font-Comfortaa text-xl text-center">
                            Добро пожаловать в Ментальный помощник
                        </Text>
                        <Text className="font-Comfortaa text-[16px] text-center">
                            Пользуйтесь нашим приложением и получайте ментальную помощь и разгрузку
                        </Text>
                    </View>
                    <View className="mt-auto w-full px-[22px]">
                        <ComButton
                            onPress={() => {
                                navigation.navigate('ChooseTopicScreen');
                            }}
                            title="Начнем!"
                            variant="secondary"
                            size="medium"
                        />
                    </View>
                </ComAnimatedAppearance>
                
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;

import { BlurView } from 'expo-blur';
import React, { useEffect } from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    ImageSourcePropType,
    StyleProp,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type TChooseCardProp = {
    title: string;
    background: string;
    bgcolor?: string;
    textClassName: string;
    classNameS: string;
    onPress?: () => void;
    isSelected?: boolean;
};

const ChooseCard = ({
    title,
    background,
    textClassName,
    classNameS,
    onPress,
    isSelected,
    bgcolor
}: TChooseCardProp) => {
   
    return (
        <TouchableOpacity onPress={onPress} className="relative">
            {
                <Animated.View
                    className={`flex rounded-3xl border-2 ${classNameS}`}
                    style={{
                        borderColor: bgcolor ? bgcolor : "#fff",
                        backgroundColor: "#fff",
                        overflow: 'hidden',
                        width: Dimensions.get("screen").width / 2 - 30,
                    }}
                >
                    <BlurView intensity={100} className='h-2/3'>
                        <Image className='w-full h-full' style={{backgroundColor: bgcolor ? bgcolor : "#fff"}} source={{ uri: background }} />
                    </BlurView>
                    <Text
                        className={`font-ComfortaaBold mb-3 text-center text-base ${textClassName} text-gray-900`}
                    >
                        {title}
                    </Text>
                </Animated.View>
            }
            {isSelected && (
                <View className="absolute top-[15px] p-[5px] left-[15px] rounded-full shadow bg-white">
                    <Text className="font-Comfortaa">Выбрано</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default ChooseCard;

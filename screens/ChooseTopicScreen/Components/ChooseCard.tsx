import React from 'react';
import {
    Image,
    ImageBackground,
    ImageSourcePropType,
    StyleProp,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

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
                <View
                    className={`flex rounded-xl ${classNameS}`}
                    style={{
                        backgroundColor: bgcolor ? bgcolor : "#fff",
                        overflow: 'hidden'
                    }}
                >
                    <Image className='w-full h-2/3' source={{ uri: background }} />
                        <Text
                            className={`font-ComfortaaBold mb-3 text-center text-base ${textClassName}`}
                        >
                            {title}
                        </Text>
                </View>
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

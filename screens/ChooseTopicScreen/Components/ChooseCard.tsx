import React from 'react'
import { Image, ImageBackground, ImageSourcePropType, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native'


type TChooseCardProp = {
    title: string,
    background: string,
    textClassName: string,
    classNameS: string,
    onPress?: () => void,
    isSelected?: boolean
}

const ChooseCard = ({title, background, textClassName, classNameS, onPress, isSelected} : TChooseCardProp) => {
  return (
    <TouchableOpacity onPress={onPress} className='relative'>
        {
            <View style={{overflow: 'hidden'}} className= {`flex rounded-xl ${classNameS}`} >
                <ImageBackground className='' source={{ uri: background }}>
                   <View className='h-full flex justify-end'>
                        <Text className={`font-Comfortaa mb-3 text-center text-base ${textClassName}`}>
                            {
                                title
                            }
                        </Text>
                   </View>
                    
                </ImageBackground>
                
            </View> 
        }
        {isSelected && 
            <View className='absolute top-[15px] p-[5px] left-[15px] rounded-full shadow bg-white'>
                <Text className='font-Comfortaa'>Выбрано</Text>
            </View>
        }
    </TouchableOpacity>
  )
}

export default ChooseCard
import React from 'react'
import { Image, ImageBackground, ImageSourcePropType, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native'


type TChooseCardProp = {
    title: string,
    background: ImageSourcePropType,
    textClassName: string,
    classNameS: string,
    
}

const ChooseCard = ({title, background, textClassName, classNameS} : TChooseCardProp) => {
  return (
    <TouchableOpacity >
        {
            <View className= {`flex rounded-xl ${classNameS}`} >
                <ImageBackground className=' ' source={background}>
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
            
        
    </TouchableOpacity>
  )
}

export default ChooseCard
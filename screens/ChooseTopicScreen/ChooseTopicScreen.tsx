import React from 'react'
import { Text, View } from 'react-native'
import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView'
import ChooseCard from './Components/ChooseCard'
import ChooseCard1 from '../../assets/ChooseCard1.png'
import ChooseCard2 from '../../assets/ChooseCard2.png'

const ChooseTopicScreen = () => {
  return (
    <ComSafeAreaView style={{backgroundColor: '#fff'} as any}>
        <View className='mt-2 p-4 w-full '> 
            <Text className='w-full text-center py-1 font-Comfortaa text-2xl'>
                В чём вам может помочь
            </Text>
            <Text className='font-Comfortaa text-center text-2xl'>
                Ментальный помощник?
            </Text> 
        </View>
        <View>
            <Text className='font-Comfortaa text-lg text-center mx-5 text-gray-500'>
                Выберите тему, на которой хотите сосредоточиться:
            </Text>
        </View>
        <View className='flex flex-row flex-wrap h-full mt-5 justify-center'>
            <ChooseCard title='Стресс'  textClassName='text-white ' background={ChooseCard1} classNameS='m-2.5 bg-[#9BA3FF] w-44 h-44'/>
            <ChooseCard title='Личностный рост'  textClassName='text-white ' background={ChooseCard2} classNameS='m-2.5 bg-[#FA6E5A] w-44 h-44'/>
            <ChooseCard title='Личностный рост'  textClassName='text-white ' background={ChooseCard1} classNameS='m-2.5 bg-[#9BA3FF] w-44 h-44'/>
            <ChooseCard title='Личностный рост'  textClassName='text-white ' background={ChooseCard1} classNameS='m-2.5 bg-[#9BA3FF] w-44 h-44'/>


        </View>
        
    </ComSafeAreaView>
  )
}

export default ChooseTopicScreen
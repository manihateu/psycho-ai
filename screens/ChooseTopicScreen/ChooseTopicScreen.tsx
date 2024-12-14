import React, { useEffect, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import ComSafeAreaView from '../../shared/ComSafeAreaView/ComSafeAreaView'
import ChooseCard from './Components/ChooseCard'
import ChooseCard1 from '../../assets/ChooseCard1.png'
import ChooseCard2 from '../../assets/ChooseCard2.png'
import { useAssignCategoriesMutation, useGetCategoriesQuery } from '../../store/api/authorizeApiSlice'
import ComButton from '../../shared/ComButton/ComButton'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Skeleton from '../../shared/ComSkeleton/ComSkeleton'
import { useDispatch } from 'react-redux'
import { select } from '../../store/slices/CategoriesSlice'

const ChooseTopicScreen = () => {
    const {data, isLoading} = useGetCategoriesQuery({})
    const [assignCategories, {isLoading: isLoadingAssign}] = useAssignCategoriesMutation()
    const url = "http://92.252.240.206:3000"
    const [selected, setSelected] = useState<number[]>([])
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const assignToUser = async () => {
        try {
            if (selected.length !== 0) {
                await assignCategories({categoryIds: selected})
                await AsyncStorage.setItem('x-select-categories', "1")
                navigation.navigate('HomeLayout')
                dispatch(select())
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(selected)
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
        <ScrollView>
            <View className={`flex flex-row flex-wrap flex-1 mt-5 justify-center ${isLoading && "gap-5 mt-5"}`}>
                {
                    isLoading ?
                        <>
                            <Skeleton style={{width: Dimensions.get('window').width / 2 - 32, height: 200}}/>
                            <Skeleton style={{width: Dimensions.get('window').width / 2 - 32, height: 200}}/>
                            <Skeleton style={{width: Dimensions.get('window').width / 2 - 32, height: 200}}/>
                            <Skeleton style={{width: Dimensions.get('window').width / 2 - 32, height: 200}}/>
                        </>
                    :
                    data.map((category: any) => 
                        <ChooseCard onPress={() => {
                            if (selected.length !== 0 && !selected.includes(category.id, 0)) {
                                setSelected((selected) => [...selected, category.id])
                            }
                            else if (selected.length == 0) {
                                setSelected([category.id])
                            }
                            else if (selected.includes(category.id, 0)) {
                                setSelected((selected) => selected.filter((elem) => elem !== category.id))
                            }
                            
                        }} isSelected={selected.includes(category.id, 0)} key={category.id} title={category.name} textClassName='text-white' background={`${url}${category.imageurl}` [`${url}${category.imageurl}`.length - 1] == '}' ? `${url}${category.imageurl}`.slice(0, -1) :  `${url}${category.imageurl}`} classNameS='m-2.5 shadow bg-gray-200 w-44 h-44'/>
                    )
                }
            </View>
        </ScrollView>
        <ComButton isLoading={isLoadingAssign} onPress={assignToUser} className='mb-5 mx-5' title='Сохранить' size='medium'/>
    </ComSafeAreaView>
  )
}

export default ChooseTopicScreen
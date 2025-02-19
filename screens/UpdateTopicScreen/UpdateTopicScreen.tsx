import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import Layout from '../../components/Layout/Layout'
import { useGetCategoriesQuery, useGetUserQuery } from '../../store/api/authorizeApiSlice'
import Skeleton from '../../shared/ComSkeleton/ComSkeleton'
import ChooseCard from '../ChooseTopicScreen/Components/ChooseCard'
import ComButton from '../../shared/ComButton/ComButton'
import { useUpdateCategoriesMutation } from '../../store/api/categories.api'

const UpdateTopicScreen = () => {
const { data, error, isLoading, refetch } = useGetUserQuery({});
const { data: categories, isLoading: categoriesLoading } = useGetCategoriesQuery({});
const [updateCategories, {isLoading: updateLoading, error: updateError}] = useUpdateCategoriesMutation({})
const [selected, setSelected] = useState ([])
const url = 'http://92.252.240.206:3000'

const updateCategoriesHandler = async () => {
    await updateCategories(selected).then(() => {refetch()})
}

console.log(updateError)

useEffect(() => {
    if(error) return
    if(isLoading) return
    const selectedId = []
    for(let category of data.categories){
        selectedId.push(category.id)
    }
    setSelected (selectedId)
},[error, isLoading])
    console.log(selected)
    return (
        <Layout canBack noBottom>
            <ScrollView>
                <View
                    className={`flex flex-row flex-wrap flex-1 mt-5 justify-center ${categoriesLoading && 'gap-5 mt-5'}`}
                >
                    {categoriesLoading || !categories ? (
                        <>
                            <Skeleton
                                style={{
                                    width: Dimensions.get('window').width / 2 - 32,
                                    height: 200,
                                }}
                            />
                            <Skeleton
                                style={{
                                    width: Dimensions.get('window').width / 2 - 32,
                                    height: 200,
                                }}
                            />
                            <Skeleton
                                style={{
                                    width: Dimensions.get('window').width / 2 - 32,
                                    height: 200,
                                }}
                            />
                            <Skeleton
                                style={{
                                    width: Dimensions.get('window').width / 2 - 32,
                                    height: 200,
                                }}
                            />
                        </>
                    ) : (
                        categories.map((category: any) => (
                            <ChooseCard
                                onPress={() => {
                                    if (
                                        selected.length !== 0 &&
                                        !selected.includes(category.id, 0)
                                    ) {
                                        setSelected((selected) => [...selected, category.id]);
                                    } else if (selected.length == 0) {
                                        setSelected([category.id]);
                                    } else if (selected.includes(category.id, 0)) {
                                        setSelected((selected) =>
                                            selected.filter((elem) => elem !== category.id)
                                        );
                                    }
                                }}
                                isSelected={selected.includes(category.id, 0)}
                                key={category.id}
                                title={category.name}
                                textClassName="text-white"
                                background={
                                    `${url}${category.imageurl}`[
                                        `${url}${category.imageurl}`.length - 1
                                    ] == '}'
                                        ? `${url}${category.imageurl}`.slice(0, -1)
                                        : `${url}${category.imageurl}`
                                }
                                classNameS="m-2.5 shadow bg-gray-200 w-44 h-44"
                                bgcolor={category.bgcolor}
                            />
                        ))
                    )}
                </View>
                <ComButton title='Изменить' className='mx-[18] mt-[30]' onPress={updateCategoriesHandler} isLoading={updateLoading}/>
            </ScrollView>
            
        </Layout>
  )
}

export default UpdateTopicScreen
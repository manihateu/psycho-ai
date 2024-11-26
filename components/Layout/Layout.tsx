import React from 'react'
import ComSafeAreaView from '../ComSafeAreaView/ComSafeAreaView'
import { Text, View } from 'react-native'

type TLayoutProps = {
    children: any,
    name: string,
    canBack?: boolean,
}

const Layout = ({children, name, canBack} : TLayoutProps) => {
  return (
    <ComSafeAreaView>
        <View className='bg-gray-500 w-full flex p-3 flex-row items-center'>
            <Text className='text-white font-bold text-lg'>
                {
                    name
                } 
            </Text>
        </View>
        <View className='flex-1 bg-gray-500'>
            <View className='flex-1 p-3 bg-gray-200 rounded-t-xl'>
                {children}
            </View>
        </View>
    </ComSafeAreaView>
  )
}

export default Layout
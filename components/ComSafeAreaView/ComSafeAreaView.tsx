import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native'

const ComSafeAreaView = ({children, style}) => {
  return (
    <SafeAreaView style={[{marginTop: StatusBar.currentHeight, flex: 1}, style]} >{children}</SafeAreaView>
  )
}

export default ComSafeAreaView
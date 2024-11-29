import React from 'react'
import { StatusBar, StyleProp, ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native'

type TComSafeAreaViewProps = {
  children: React.ReactNode,
  style?: StyleProp<ViewProps>
}

const ComSafeAreaView = ({children, style} : TComSafeAreaViewProps) => {
  return (
    <SafeAreaView style={[{marginTop: StatusBar.currentHeight, flex: 1}, style]} >{children}</SafeAreaView>
  )
}

export default ComSafeAreaView
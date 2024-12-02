import React from 'react'
import { StatusBar, StyleProp, ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native'

type TComSafeAreaViewProps = {
  children: React.ReactNode,
  style?: StyleProp<ViewProps>,
  className?: string
}

const ComSafeAreaView = ({children, style, className} : TComSafeAreaViewProps) => {
  return (
    <SafeAreaView className={className} style={[{marginTop: StatusBar.currentHeight, flex: 1}, style]} >{children}</SafeAreaView>
  )
}

export default ComSafeAreaView
import React from 'react'
import { StatusBar, StyleProp, View, ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native'

type TComSafeAreaViewProps = {
  children: React.ReactNode,
  style?: StyleProp<ViewProps>,
  className?: string
}

const ComSafeAreaView = ({children, style, className} : TComSafeAreaViewProps) => {
  return (
    <View className={className} style={[{marginTop: StatusBar.currentHeight, flex: 1, position: 'relative'}, style]} >{children}</View>
  )
}

export default ComSafeAreaView
import React from 'react'
import { Platform, StatusBar, StyleProp, View, ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native'

type TComSafeAreaViewProps = {
  children: React.ReactNode,
  style?: StyleProp<ViewProps>,
  className?: string
}

const ComSafeAreaView = ({children, style, className} : TComSafeAreaViewProps) => {
  return  Platform.OS == 'android' ? 
      <View className={className} style={[{marginTop: StatusBar.currentHeight, flex: 1, position: 'relative'}, style]} >{children}</View>
      :
      <SafeAreaView className={className} style={[{flex: 1, position: 'relative'}, style]} >{children}</SafeAreaView>
}

export default ComSafeAreaView
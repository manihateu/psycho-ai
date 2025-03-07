// BubbleTabBar.js
import React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
const BubbleTabBar = ({ title, iconJSX, onPress, selected, maxWidth }: { title: string, iconJSX: React.JSX.Element, onPress: () => void, selected: boolean, maxWidth?: number }) => {
    const circleSize = useSharedValue(50)
    const circleTextOpacity = useSharedValue(0)
    const WIDTH = maxWidth || 150
    const animatedStyle = useAnimatedStyle(() => (
        {
            width: circleSize.value
        }
    ))

    const textAnimatedStyle = useAnimatedStyle(() => (
        {
            opacity: circleTextOpacity.value
        }
    ))

    React.useEffect(() => {
        circleSize.value = withTiming(selected ? WIDTH : 50, { duration: 250 });
        circleTextOpacity.value = withTiming(selected ? 1 : 0, { duration: 350 })
    }, [selected]);
  return (
    <TouchableOpacity onPress={onPress}>
        <Animated.View className={`${selected ? "bg-white" : ""} rounded-full h-[50px] overflow-hidden px-[10px] flex flex-row items-center ${selected ? "justify-center" : ""}`} style={animatedStyle}>
            {iconJSX}
            <Animated.Text style={textAnimatedStyle} className="text-black ml-[10px] text-nowrap font-ComfortaaBold">
                {title}
            </Animated.Text>
        </Animated.View>
    </TouchableOpacity>
  )
};
export default BubbleTabBar;
import { useEffect } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"

export const ComAnimatedAppearance = ({children, className = ""}) => {
    const translateY = useSharedValue(300);

    const animatedStyle = useAnimatedStyle(() => {
        return {
        transform: [
            {
            translateY: translateY.value,
            },
        ],
        };
    });



    useEffect(() => {
        translateY.value = withSpring(0, { damping: 10, stiffness: 100 });
    }, [])
    return (
        <Animated.View style={animatedStyle} className={className}>
            {children}
        </Animated.View>
    )
}
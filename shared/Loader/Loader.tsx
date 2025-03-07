import React, { useEffect } from 'react';
import SpinerSVG from '../../assets/logo.png';
import Animated, {
    cancelAnimation,
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';
import { Image } from 'react-native';

const Loader = () => {
    const rotation = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateZ: `${rotation.value}deg`,
                },
            ],
        };
    }, [rotation.value]);

    useEffect(() => {
        rotation.value = withRepeat(
            withTiming(360, {
                duration: 1000,
                easing: Easing.linear,
            }),
            -1
        );
        return () => cancelAnimation(rotation);
    }, []);

    return (
        <Animated.View style={animatedStyles}>
            <Image source={SpinerSVG} className='w-[30px] h-[30px]'/>
        </Animated.View>
    );
};

export default Loader;

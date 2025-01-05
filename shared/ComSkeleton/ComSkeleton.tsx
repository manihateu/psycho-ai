import { useEffect } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Animated, {
    withTiming,
    withRepeat,
    withSequence,
    useSharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';

type TSkeletomProps = {
    style: StyleProp<ViewStyle>;
};

const Skeleton = ({ style }: TSkeletomProps) => {
    const opacity = useSharedValue(1);

    useEffect(() => {
        opacity.value = withRepeat(
            withSequence(
                withTiming(0.3, {
                    duration: 1000,
                }),
                withTiming(1, {
                    duration: 1000,
                })
            ),
            Infinity,
            true
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        };
    });

    return <Animated.View style={[styles.skeleton, animatedStyle, style]} />;
};

const styles = StyleSheet.create({
    skeleton: {
        backgroundColor: '#CFCFCF',
        width: 70,
        height: 20,
        borderRadius: 20,
    },
});

export default Skeleton;

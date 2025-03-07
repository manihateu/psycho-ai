import { PropsWithoutRef, useEffect } from 'react';
import { View, ViewProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type TComAnimatedAppearanceProps = {
    children?: React.ReactNode;
    classNames: string;
};

export const ComAnimatedAppearance = ({
    children,
    classNames,
    ...rest
}: TComAnimatedAppearanceProps & ViewProps) => {
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
    }, []);
    return (
        <Animated.View style={animatedStyle} className={classNames} {...rest}>
            {children}
        </Animated.View>
    );
};

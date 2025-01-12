import { ReactNode, useEffect } from 'react';
import Animated, {
    useAnimatedKeyboard,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

const ComAnimatedKeyboardAvoiding = ({ children }: { children?: ReactNode }) => {
    const keyboard = useAnimatedKeyboard();
    const translateY = useSharedValue(0)
        
    const translateStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withSpring(keyboard.height.value > 100 ? -keyboard.height.value + 100 : 0) }],
        };
    });
    return <Animated.View style={translateStyle}>{children}</Animated.View>;
};

export default ComAnimatedKeyboardAvoiding;

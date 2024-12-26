import { ReactNode } from 'react';
import Animated, {
    useAnimatedKeyboard,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

const ComAnimatedKeyboardAvoiding = ({ children }: { children: ReactNode }) => {
    const keyboard = useAnimatedKeyboard();
    const translateStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withSpring(-keyboard.height.value) }],
        };
    });
    return <Animated.View style={translateStyle}>{children}</Animated.View>;
};

export default ComAnimatedKeyboardAvoiding;

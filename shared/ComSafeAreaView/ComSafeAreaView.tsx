import React from 'react';
import {
    Dimensions,
    Platform,
    StatusBar,
    StyleProp,
    View,
    ViewProps,
    ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native';

type TComSafeAreaViewProps = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    className?: string;
};

const ComSafeAreaView = ({ children, style, className }: TComSafeAreaViewProps) => {
    return (
        <SafeAreaView className={className} style={[{ flex: 1, position: 'relative' }, style]}>
            {children}
        </SafeAreaView>
    );
};

export default ComSafeAreaView;

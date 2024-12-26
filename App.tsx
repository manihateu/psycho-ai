import { RootNavigator } from './components/RootNavigator/RootNavigator';
import { ChatScreen } from './screens/ChatScreen/ChatScreen';
import { store } from './store/store';
import { Toasts } from '@backpackapp-io/react-native-toast';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Dimensions, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [loaded, error] = useFonts({
        Comfortaa: require('./assets/fonts/comfortaa/Comfortaa-VariableFont_wght.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <BottomSheetModalProvider>
                        <NavigationContainer>
                            <RootNavigator />
                        </NavigationContainer>
                        <Toasts />
                    </BottomSheetModalProvider>
                </GestureHandlerRootView>
            </SafeAreaProvider>
        </Provider>
    );
}

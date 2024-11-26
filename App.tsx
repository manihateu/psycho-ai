import { NavigationContainer } from '@react-navigation/native';
import { ChatScreen } from './screens/ChatScreen/ChatScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { RootNavigator } from './components/RootNavigator/RootNavigator';


export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <RootNavigator/>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

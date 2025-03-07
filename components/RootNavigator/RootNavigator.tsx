import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { private_routes, public_routes } from './Routes';
import { NavigationProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useTokenPolling } from '../../store/api/mainApiSlice';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import { useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deselect, select } from '../../store/slices/CategoriesSlice';
import { Socket } from 'socket.io';
import { io } from 'socket.io-client';
import Constants from "expo-constants";
import * as Notifications from 'expo-notifications';
import * as Device from "expo-device"
import { Platform } from 'react-native';

export type ScreenNames = (typeof private_routes)[number]['name'];

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

// notifications 
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: false,
        shouldSetBadge: false,
        shouldShowAlert: true,
    })
});

export async function schedulePushNotification(text: string) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "У вас новое уведомление! 📬",
      body: text,
    //   data: { data: 'goes here', test: { test1: 'more data' } },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 2,
    },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('myNotificationChannel', {
      name: 'A channel is needed for the permissions prompt to appear',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    try {
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
      if (!projectId) {
        throw new Error('Project ID not found');
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log(token);
    } catch (e) {
      token = `${e}`;
    }
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
// -------------- 

export const RootNavigator = () => {
    const isAuth = useSelector((state: RootState) => state.userAuth.isAuth);
    const isSelectCategories = useSelector(
        (state: RootState) => state.categoriesSlice.selectCategories
    );
    const dispatch = useDispatch();
    const isLoading = useTokenPolling();

    // notifications 
    const [expoPushToken, setExpoPushToken] = useState('');
    const [channels, setChannels] = useState<Notifications.NotificationChannel[]>([]);
    const [notification, setNotification] = useState<Notifications.Notification | undefined>(
        undefined
    );
    const notificationListener = useRef<Notifications.EventSubscription>();
    const responseListener = useRef<Notifications.EventSubscription>();
    useEffect(() => {
        registerForPushNotificationsAsync().then(token => token && setExpoPushToken(token));

        if (Platform.OS === 'android') {
            Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
        }
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            notificationListener.current &&
                Notifications.removeNotificationSubscription(notificationListener.current);
            responseListener.current &&
                Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);
    // ---------- 
    useEffect(() => {
        const selectCategories = async () => {
            const selectSt = await AsyncStorage.getItem('x-select-categories');
            if (selectSt) {
                dispatch(select());
            } else {
                dispatch(deselect())
            }
        };
        selectCategories();
    }, []);
    if (isAuth) {
        const socket = io(process.env.API_URL ?? "")
        socket.on(`notifications:${2}`, (notification) => {
            schedulePushNotification(notification.message)
        });
    }
    if (isLoading) return <SplashScreen />;
    return (
        <Stack.Navigator>
            {isAuth
                ? private_routes.map((route) => {
                      if (
                          (route.name == 'ChooseTopicScreen' || route.name == 'WelcomeScreen') &&
                          isSelectCategories
                      ) {
                          return null;
                      }
                      return (
                          <Stack.Screen
                              key={route.name}
                              name={route.name}
                              component={route.component}
                              options={{ headerShown: false }}
                          />
                      );
                  })
                : public_routes.map((route) => (
                      <Stack.Screen
                          key={route.name}
                          name={route.name}
                          component={route.component}
                          options={{ headerShown: false }}
                      />
                  ))}
        </Stack.Navigator>
    );
};

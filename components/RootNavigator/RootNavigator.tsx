import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import { useTokenPolling } from '../../store/api/mainApiSlice';
import { select } from '../../store/slices/CategoriesSlice';
import { RootState } from '../../store/store';
import { private_routes, public_routes } from './Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export type ScreenNames = (typeof private_routes)[number]['name'];

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
    const isAuth = useSelector((state: RootState) => state.userAuth.isAuth);
    const isSelectCategories = useSelector(
        (state: RootState) => state.categoriesSlice.selectCategories
    );
    const dispatch = useDispatch();
    const isLoading = useTokenPolling();
    useEffect(() => {
        const selectCategories = async () => {
            const selectSt = await AsyncStorage.getItem('x-select-categories');
            if (selectSt) {
                dispatch(select());
            }
        };
        selectCategories();
    }, []);
    if (isLoading) return <SplashScreen />;
    return (
        <Stack.Navigator>
            {isAuth
                ? private_routes.map((route) => {
                      if (
                          (route.name == 'ChooseTopicScreen' || route.name == 'WelcomeScreen') &&
                          isSelectCategories
                      ) {
                          console.log(isSelectCategories);
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

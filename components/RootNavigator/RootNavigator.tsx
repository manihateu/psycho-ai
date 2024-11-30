import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { private_routes } from "./Routes";
import { NavigationProp } from "@react-navigation/native";

export type ScreenNames = 
    typeof private_routes[number]["name"]

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator <RootStackParamList> ();

export const RootNavigator = () => {
    return (
        <Stack.Navigator>
            
            {private_routes.map((route) => 
                <Stack.Screen key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{headerShown: false}}
                />
            )}
            
        </Stack.Navigator>
    )
}
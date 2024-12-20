import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { private_routes, public_routes } from "./Routes";
import { NavigationProp } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export type ScreenNames = 
    typeof private_routes[number]["name"]

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator <RootStackParamList> ();

export const RootNavigator = () => {
    const isAuth = useSelector((state: RootState) => state.userAuth.isAuth)
    console.log(isAuth)
    return (
        <Stack.Navigator>
            
            {isAuth ? 
                private_routes.map((route) => 
                    <Stack.Screen 
                        key={route.name}
                        name={route.name}
                        component={route.component}
                        options={{headerShown: false}}
                    />
                ) 
                :
                public_routes.map((route) => 
                    <Stack.Screen 
                        key={route.name}
                        name={route.name}
                        component={route.component} 
                        options={{headerShown: false}}
                    />
                ) 
            }
            
        </Stack.Navigator>
    )
}
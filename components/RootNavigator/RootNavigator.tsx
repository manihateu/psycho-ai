import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { private_routes } from "./Routes";

const Stack = createNativeStackNavigator();

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
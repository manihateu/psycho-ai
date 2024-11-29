import { ChatScreen } from "../../screens/ChatScreen/ChatScreen";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import OnboardingScreen from "../../screens/OnboardingScreen/OnboardingScreen";

type TRoute = {
    name: string,
    component: () => React.JSX.Element
}

export const private_routes: TRoute[] = [
    {
        name: "ChatScreen",
        component: ChatScreen
    },
    {
        name: "LoginScreen",
        component: LoginScreen
    },
    {
        name: "OnboardingScreen",
        component: OnboardingScreen
    }
]
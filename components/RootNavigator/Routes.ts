import { ChatScreen } from "../../screens/ChatScreen/ChatScreen";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import OnboardingScreen from "../../screens/OnboardingScreen/OnboardingScreen";
import SignUpScreen from "../../screens/SignUpScreen/SignUpScreen";
import WelcomeScreen from "../../screens/WelcomeScreen/WelcomeScreen";

type TRoute = {
    name: string,
    component: () => React.JSX.Element
}

export const public_routes: TRoute[] = [
    {
        name: "OnboardingScreen",
        component: OnboardingScreen
    },
    {
        name: "LoginScreen",
        component: LoginScreen
    },
    {
        name: "SignUpScreen",
        component: SignUpScreen
    },
    {
        name: "WelcomeScreen",
        component: WelcomeScreen
    },
]

export const private_routes: TRoute[] = [
    {
        name: "ChatScreen",
        component: ChatScreen
    },
]
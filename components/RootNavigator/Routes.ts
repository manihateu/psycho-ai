import { ChatScreen } from "../../screens/ChatScreen/ChatScreen";

type TRoute = {
    name: string,
    component: () => React.JSX.Element
}

export const private_routes: TRoute[] = [
    {
        name: "ChatScreen",
        component: ChatScreen
    }
]
import { useState } from "react"
import Layout from "../../components/Layout/Layout"
import HomeScreen from "../HomeScreen/HomeScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../SplashScreen/SplashScreen";

const pages = [
    {
        name: "HomeScreen",
    }
]

const Tab = createBottomTabNavigator();

const HomeLayout = () => {
    const [selectedPage, setSelectedPage] = useState(0)
    return (
        <Layout selected={selectedPage} setSelectedPage={setSelectedPage}>
            {pages[selectedPage]?.name == "HomeScreen" && <HomeScreen />}
        </Layout>
    )
}

export default HomeLayout
import { useState } from "react"
import Layout from "../../components/Layout/Layout"
import HomeScreen from "../HomeScreen/HomeScreen"

const pages = [
    {
        name: "HomeScreen",
    }
]

const HomeLayout = () => {
    const [selectedPage, setSelectedPage] = useState(0)
    return (
        <Layout selected={selectedPage} setSelectedPage={setSelectedPage}>
            {pages[selectedPage]?.name == "HomeScreen" && <HomeScreen />}
        </Layout>
    )
}

export default HomeLayout
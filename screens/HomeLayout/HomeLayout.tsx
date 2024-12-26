import Layout from '../../components/Layout/Layout';
import { ChatScreen } from '../ChatScreen/ChatScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import SplashScreen from '../SplashScreen/SplashScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';

const pages = [
    {
        name: 'HomeScreen',
    },
    {
        name: 'a',
    },
    {
        name: 'ChatScreen',
    },
    {
        name: 'b',
    },
    {
        name: 'ProfileScreen',
    },
];

const Tab = createBottomTabNavigator();

const HomeLayout = () => {
    const [selectedPage, setSelectedPage] = useState(0);
    return (
        <Layout selected={selectedPage} setSelectedPage={setSelectedPage}>
            {pages[selectedPage]?.name == 'HomeScreen' && <HomeScreen />}
            {pages[selectedPage]?.name == 'ChatScreen' && <ChatScreen />}
            {pages[selectedPage]?.name == 'ProfileScreen' && <ProfileScreen />}
        </Layout>
    );
};

export default HomeLayout;

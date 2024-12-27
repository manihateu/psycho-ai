import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import HomeScreen from '../HomeScreen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../SplashScreen/SplashScreen';
import { ChatScreen } from '../ChatScreen/ChatScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import MusicScreen from '../MusicScreen/MusicScreen';

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
        name: 'MusicScreen',
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
            {pages[selectedPage]?.name == 'MusicScreen' && <MusicScreen />}
        </Layout>
    );
};

export default HomeLayout;

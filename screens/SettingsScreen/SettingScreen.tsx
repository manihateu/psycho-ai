import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Dimensions, Text, View } from 'react-native';
import { mixins } from '../../constans';
import Switch from '../../shared/ComSwitch/ComSwitch';
import { useSharedValue } from 'react-native-reanimated';
import { useColorScheme } from 'nativewind';

const SettingScreen = () => {
    const [on, setOn] = useState (false)
    const { toggleColorScheme } = useColorScheme();
    useEffect(()=>{
        if(!on){
            toggleColorScheme ()
        }else{
            toggleColorScheme ()
        }
    },[on])
    return (
        <Layout canBack noBottom>
            <View className="px-[16px]">
                <View
                    style={[mixins.shadow, { maxWidth: Dimensions.get('screen').width - 32 }]}
                    className="flex-row border bg-white p-2 border-gray-300 rounded-xl justify-between items-center"
                >
                    <Text className="font-Comfortaa text-lg">Тема</Text>
                    <Switch isOn={on} handlePress={setOn} />
                </View>
            </View>
        </Layout>
    );
};

export default SettingScreen;

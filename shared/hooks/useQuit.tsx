import { useDispatch } from 'react-redux';
import { quit } from '../../store/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { toast } from '@backpackapp-io/react-native-toast';

export const useQuit = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const quitHandler = async () => {
        try {
            setLoading(true)
            await AsyncStorage.removeItem("x-token-access");
            await AsyncStorage.removeItem("x-token-refresh");
            await AsyncStorage.removeItem("x-select-categories");
            dispatch(quit());
        } catch (e) {
            toast.error("Не удалось выйти")
            setLoading(false)
        } finally {
            setLoading(false)
        }
    };
    return { quitHandler, loading };
};

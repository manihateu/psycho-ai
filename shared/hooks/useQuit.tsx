import { quit } from '../../store/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

export const useQuit = () => {
    const dispatch = useDispatch();
    const quitHandler = async () => {
        dispatch(quit());
        await AsyncStorage.multiRemove([
            'x-token-access',
            'x-token-refresh',
            'x-select-categories',
        ]);
    };
    return { quitHandler };
};

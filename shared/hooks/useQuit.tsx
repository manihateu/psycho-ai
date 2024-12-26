import { useDispatch } from "react-redux"
import { quit } from "../../store/slices/userSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"

export const useQuit = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const quitHandler = async () => {
        dispatch(quit())
        await AsyncStorage.multiRemove(["x-token-access", "x-token-refresh", "x-select-categories"])
    }
    return {quitHandler}
}
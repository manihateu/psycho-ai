import { useDispatch } from "react-redux"
import { quit } from "../../store/slices/userSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const useQuit = () => {
    const dispatch = useDispatch()
    const quitHandler = async () => {
        await AsyncStorage.multiRemove(["x-token-access", "x-token-refresh", "x-select-categories"])
        dispatch(quit())
    }
    return {quitHandler}
}
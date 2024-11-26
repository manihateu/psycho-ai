import { StyleSheet } from "react-native";

export const mixins = StyleSheet.create({
	shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
	}
})
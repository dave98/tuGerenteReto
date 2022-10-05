import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: "50%",
        backgroundColor: "#aaa"
    },
    descriptionContainer: {
        marginTop: 20,
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 28, 
        fontWeight: "bold",
        textTransform: "capitalize",
        paddingBottom: 5,
        borderBottomWidth: .5,
    },
    description: {
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 2,
        textTransform: "capitalize",
        textAlign: "justify",
        marginTop: 20,
    }
})
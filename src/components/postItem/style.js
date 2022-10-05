import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        height: 130,
        backgroundColor: "#7a7a7a",
    },
    innerContainer: {
        height: "100%",
        width: "100%",
        
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        display: "flex",
        justifyContent: "flex-end",
    },
    titleContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 50, 
        paddingVertical: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "300",
        color: "white",
        textTransform: "capitalize",
        letterSpacing: .5,
    }
})
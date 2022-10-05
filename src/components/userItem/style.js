import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        borderColor: "#a2a2a2",
        borderBottomWidth: 1,
        padding: 10,
    },
    innerContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },  
    segment: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    alignLeft: {
        alignItems: "flex-start",
    },
    alignRight: {
        alignItems: "flex-end",
    },
    name: {
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 1,
    },
    email: {
        fontSize: 14, 
        fontWeight: "300",
    },
    username: {
        fontSize: 12,
        fontWeight: "200",
    }
})
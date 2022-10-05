import { Text, View } from "react-native";
import { style } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function EmptyArea(){
    return (
        <View style={style.container}>
            <MaterialCommunityIcons name="database-minus" size={96} color={"gray"}/>
            <Text style={style.message}>Sin datos que mostrar</Text>
        </View>
    )
}
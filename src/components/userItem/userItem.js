import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { useGlobalContext } from "../../contexts/global-context";
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

export default function UserItem({id, name, email, username}){
    const {setSelectedUser} = useGlobalContext();
    const navigator = useContext(NavigationContext)

    function handleClick(){
        console.log(id);
        setSelectedUser(id)
        navigator.navigate("posts")
    }

    return (
        <View style={style.container}>
            <TouchableOpacity  onPress={handleClick} style={style.innerContainer}>
                <View style={[style.segment, style.alignLeft]}>
                    <Text style={style.name}>{name}</Text>
                    <Text style={style.email}>{email}</Text>
                </View>
                <View style={[style.segment, style.alignRight]}>
                    <AntDesign name="user" size={24} color="black"/>
                    <Text style={style.username}>{username}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
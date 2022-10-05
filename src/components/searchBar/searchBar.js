import { useState } from "react";
import { TextInput, View } from "react-native";
import { style } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { useGlobalContext } from "../../contexts/global-context";

export default function SearchBar(){
    const {searchText, setSearchText} = useGlobalContext()

    return (
        <View style={style.container}>
            <Ionicons name="ios-search-outline" size={24} color="black" />
            <TextInput style={style.input}
                value={searchText}
                onChangeText={setSearchText}
                placeholder={"Search by email"}
                keyboardType="email-address"
                autoFocus={true}
                clearButtonMode={"always"}
            />
        </View>
    )
}
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import EmptyArea from "../../components/emptyArea";
import SearchBar from "../../components/searchBar";
import UserItem from "../../components/userItem";
import { useGlobalContext } from "../../contexts/global-context";
import { styles } from "./style";

export default function HomeScreen(){
    const {usersList, searchText} = useGlobalContext();
    const [listedUsers, setListedUsers] = useState(usersList)

    useEffect(() => {
        if(!searchText || searchText == ""){
            setListedUsers([])
        }else{
            let regexTester = new RegExp(searchText.toLowerCase() + ".*");
            let tList = usersList.filter((u) => regexTester.test(u.email.toLowerCase()))
            setListedUsers(tList);
        }
    }, [searchText, usersList])

    return (
        <View style={styles.container}>
            <SearchBar/>
            {
                listedUsers.length ?
                    <ScrollView style={styles.usersContainer}>
                        {
                                listedUsers.map((u, idx) => (
                                    <UserItem
                                        key={u.id}
                                        id={u.id}
                                        name={u.name}
                                        email={u.email}
                                        username={u.username}
                                    />
                                ))
                        }
                    </ScrollView>
                :
                <EmptyArea/>
            }
        </View>
    )
}
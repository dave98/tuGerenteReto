import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import PostItem from "../../components/postItem";
import { useGlobalContext } from "../../contexts/global-context";
import { style } from "./style";

export default function Posts(){
    const {userPosts} = useGlobalContext();

    return (
        <ScrollView style={style.container}>
            {
                userPosts.map((up) => (
                    <PostItem
                        key={up.id}
                        id={up.id}
                        title={up.title}
                    />
                ))
            }
        </ScrollView>
    )
}
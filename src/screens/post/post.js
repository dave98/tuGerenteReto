import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import api from "../../api/api";
import { useGlobalContext } from "../../contexts/global-context";
import { style } from "./style";

export default function Post(){
    const {selectedPost} = useGlobalContext();
    const [post, setPost] = useState(null)
    const [image, setImage] = useState(null)

    // Requesting again to obtain fresh data from current post.
    // Information from previous queries can be used. Optimization dependency
    async function requestPostData(){
        await api.get("posts/" + selectedPost.toString())
            .then(({data}) => {
                setPost(data);
            })
            .catch(() => {
                setPost(null);
            })

        await api.get("photos/" + selectedPost.toString())
            .then(({data}) => {
                setImage(data.url + ".jpg")
            })
            .catch(() => {
                setImage(null)
            })
    }

    useEffect(() => {
        if(selectedPost){
            requestPostData();
        }
    }, [selectedPost])

    return (
        <View style={style.container}>
            <Image
                style={style.image}
                source={{uri: image}}
            />
            <View style={style.descriptionContainer}>
                <Text style={style.title}>{post?.title}</Text>
                <Text style={style.description}>{post?.body}</Text>
            </View>
        </View>
    )
}
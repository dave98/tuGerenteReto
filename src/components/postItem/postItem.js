import { NavigationContext } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import api from "../../api/api";
import { useGlobalContext } from "../../contexts/global-context";
import { style } from "./style";

export default function PostItem({id, title}){
    const {setSelectedPost} = useGlobalContext();
    const navigator = useContext(NavigationContext)
    const [thumbnail, setThumbnail] = useState(null);

    async function requestImages(){
        api.get("photos/" + id.toString())
            .then(({data}) => {
                setThumbnail(data.thumbnailUrl + ".jpg")
            })
            .catch(() => {
                setThumbnail(null)
            })
    }

    function handleClick(){ 
        setSelectedPost(id);
        navigator.navigate("post")
    }

    useEffect(() => {
        requestImages();        
    }, [id])

    
    return (
        <View style={style.container}>
            <TouchableOpacity 
                onPress={handleClick}
                style={style.innerContainer}
            >
                <ImageBackground
                    style={style.image}
                    source={{uri: thumbnail}}
                >    
                    <View style={style.titleContainer}>
                        <Text 
                            style={style.title}
                            numberOfLines={1}
                        >
                            {title}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}
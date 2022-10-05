import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

const GlobalContext = createContext();
const GlobalProvider = ({children}) => {
    const [searchText, setSearchText] = useState(null) 
    const [usersList, setUsersList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userPosts, setUserPosts] = useState([])
    const [selectedPost, setSelectedPost] = useState(null);
    async function getUsersList(){
        await api.get("users")
            .then(({data}) => {
                setUsersList(data)
            })
            .catch(() => {
                setUsersList([])
            })
    }

    async function getPosts(){
        setUserPosts([]);
        await api.get("posts?userId=" + selectedUser.toString())
            .then(({data}) => {
                setUserPosts(data);
            })
            .catch(() => {
                setUserPosts([])
            })
    }

    useEffect(() => {
        getUsersList();
    }, [])

    useEffect(() => {
        if(selectedUser){
            getPosts();
        }
    }, [selectedUser])

    return (
        <GlobalContext.Provider
            value={{
                usersList, setUsersList,
                searchText, setSearchText,
                selectedUser, setSelectedUser,
                userPosts, setUserPosts,
                selectedPost, setSelectedPost
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export {GlobalProvider, useGlobalContext}
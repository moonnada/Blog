import { useState, useEffect } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import axios from "axios";
import { useLocation } from "react-router"

export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(() => {
        const fecthPosts = async () => {
           const res = await axios.get("/posts" + search)
            setPosts(res.data)
        }
        fecthPosts();
    },[search] )

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar/>
            </div>
        </>
    )
}

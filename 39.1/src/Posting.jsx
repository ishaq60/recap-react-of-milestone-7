import { useEffect, useState } from "react";
import Dpost from "./Dpost";
import './Friends.css'

export default function Posting(){
    const [posts,setpost]=useState([])
 useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>setpost(data))
 },[]);
    return(

        <div>

            {
                posts.map(post=><Dpost post={post}></Dpost> )
            }
        </div>

    )
}
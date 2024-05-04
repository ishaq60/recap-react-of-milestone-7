import { useEffect, useState } from "react"
import './Friends.css'
import SingleFriends from "./singleFriends";
export default function Friend(){
    const[friends,setfriends]=useState([]);
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then(data=>setfriends(data))
    },[]);
  return(
   <div className="box">
 <h1>friends:{friends.length}</h1>
{
    friends.map(Friend=><SingleFriends Friend={Friend}></SingleFriends>)
}
   </div>
  ) 
}

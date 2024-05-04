import { useEffect, useState } from "react"

export default function User(){
    const [users,setusers]=useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setusers(data))

    },[])
    return(
        <div>
      <h1> users:{users.length}</h1>
        </div>
    )
}
/**
 * 1.declare a state to hold the data
 * 2.useEffect with call back and dependency  array
 * 3.use fetch to load data


*/
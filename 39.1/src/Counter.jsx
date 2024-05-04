import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)

    const handaleAdd=()=>{
        const newcount=count+1;
        setCount(newcount)
    }

    const handalereduce=()=>{
        const newReduce=count-1;
        setCount(newReduce)
    }


    return(
        <div style={{border:"2px solid green"}}>
           <h3>Counter:{count}</h3> 
           <button onClick={handaleAdd}>Add</button>
           <button onClick={handalereduce}>Reduce</button>
        </div>
    )
}
import { useEffect } from "react";
import { useState } from "react";
import Singlecard from "./Singlecard";



const Carts = ({handalecart}) => {
    const[carts,setcart]=useState([])

    useEffect(()=>{
        fetch("cart.json")
        .then(res=>res.json())
        .then(data=>setcart(data))
    },[])
    return (
        <div className="w-2/3 grid-cols-2 ">
            <h1 className="text-4xl font  bold">Products Discription</h1>
         <div className=" grid grid-cols-2 mt-10 gap-4 ">
         {
            carts.map(cart=><Singlecard handalecart={handalecart} cart={cart} key={cart.id}></Singlecard>)
          }
          
         </div>
        </div>
    );
};

export default Carts;
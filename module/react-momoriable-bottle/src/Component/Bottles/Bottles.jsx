import { useEffect, useState } from "react";
import BottlesDeatils from "./BottlesDeatils";
import './bottle.css'
import { getStoredCart, saveCarttolocalStorage } from "../../Utility";

const Bottles = () => {
  const [bottles,setbottles]=useState([])
  const [parse,setparse]=useState([])
  useEffect(()=>{
    fetch('bottle.json')
    .then(res=>res.json()
    .then(data=>setbottles(data))
    )
  })
 useEffect(()=>{
  console.log(bottles.length);
if(bottles.length>0){
  const storageCART=getStoredCart()
  console.log(storageCART);
  const saveCart =[]
  for(const id of storageCART){
    console.log(id);
    const bottlei=bottles.find(bot=>bot.id===id);
    console.log(bottlei);
    saveCart.push(saveCart)
  }
  console.log(saveCart);
  
}
 },[bottles])


  const parsehandale =(bottle)=>{
const newParse=[...parse,bottle]
setparse(newParse)
saveCarttolocalStorage(bottle.id) //add to  local storage
  }
    return (
        <div>
            <h1>CardAvilable:{parse.length}</h1>
            {
                parse.map(p=> <li key={p.id}>{p.name}</li>)
            }
            <div className="bottles">
          
          {
              bottles.map(bottle=><BottlesDeatils key={bottle.id}
                  parsehandale={parsehandale}
                   bottle={bottle}></BottlesDeatils>)
          }
      </div>
        </div>
    );
};

export default Bottles;
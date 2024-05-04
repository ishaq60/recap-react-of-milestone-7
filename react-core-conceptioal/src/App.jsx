
import { useState } from 'react'
import './App.css'
import Addtocart from './Component/Addtocart/Addtocart'
import Carts from './Component/cards/Carts'

function App() {
 const[carts,setcart]=useState([])
 
 
 const handalecart=cart=>{
  const isExist=carts.find(item=>item.id==cart.id)
  if(!isExist){
    const newcart=[...carts,cart]
    setcart(newcart)
  }
  else{
    alert('already exist')
  }

 }

 const handaledelete=(id)=>{
  console.log('delete item',id);
  const remaining=carts.filter(remove=>remove.id!==id)
  setcart(remaining)
 }
  return (
    <>
      
      <h1 className='text-4xl text-center'>Shoping Center</h1>
    <div className='flex container mt-8 justify-between mx-auto'>
    <Carts handalecart={handalecart}></Carts>
    <Addtocart handaledelete={handaledelete} carts={carts}></Addtocart>
    </div>
     
    </>
  )
}

export default App


import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Component/Watch/Watch'

function App() {
 const [watch,setWatch] =useState([])
 useEffect(()=>{
fetch('Watches.json')
.then(res=>res.json())
.then(data=>setWatch(data))

 },[])
// const Watches =[
//   {
//     "brand": "Rolex",
//     "model": "Submariner",
//     "price": 10000,
//     "movement": "Automatic",
//     "case_material": "Stainless Steel"
//   },
//   {
//     "brand": "Omega",
//     "model": "Speedmaster Professional Moonwatch",
//     "price": 5000,
//     "movement": "Manual-winding",
//     "case_material": "Stainless Steel"
//   },
//   {
//     "brand": "TAG Heuer",
//     "model": "Carrera",
//     "price": 3000,
//     "movement": "Automatic",
//     "case_material": "Stainless Steel"
//   },
//   {
//     "brand": "Patek Philippe",
//     "model": "Nautilus",
//     "price": 30000,
//     "movement": "Automatic",
//     "case_material": "Rose Gold"
//   },
//   {
//     "brand": "Seiko",
//     "model": "SKX007",
//     "price": 200,
//     "movement": "Automatic",
//     "case_material": "Stainless Steel"
//   }
// ]

  return (
    <>
      
   
      {
        watch.map(watch=> <Watch key={watch.id} watch={watch}></Watch>)
      } 
      
    </>
  )
}

export default App


import './App.css'
import Counter from './Counter'
import Friend from './Friend'
import Posting from './Posting'


import Team from './Team'


import User from './user'

function App() {
 function handaleClick(){
  alert('button click')
 }
 function handaleClick2(){
  alert('hanadle click2')
 }
const addtoFive=(num)=>{
  alert(num+3)
}
  return (
    <>
        
      <h1>React core concept</h1>
      <Posting></Posting>
      <Counter></Counter>
      <User></User>
      <Team></Team>
      <Friend></Friend>
      
      <button onClick={handaleClick}>click me</button>
     <button onClick={handaleClick2}>button click </button>
     <button onClick={()=>{alert('this is the 3rd button click')}}>button3</button>
     {/* difference waya to solve */}
     <button onClick={()=>addtoFive(3)}>button 4</button>
   
    </>
  )
}

export default App

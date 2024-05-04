import { useState } from "react"

export default function Team(){
    const [player,setplayer]=useState(0)
    const teamStyle={
        border:'2px solid purple',
        margin:"15px",
        padding:'15px',
        BorderRadius:'15px'
    }
//  function addPlayer(){
//     const newPlayer=player+1;
//     setplayer(newPlayer)
//  }
//  function ReducePlayer(){
//     const reduceplayer=player-1;
//     setplayer(reduceplayer)
    
//  }
 const addPlayer=()=>{
    const newPlayer=player+1;
    setplayer(newPlayer)
 }
const ReducePlayer=()=>{
    const reduceplayer=player-1;
    setplayer(reduceplayer)
    
 }

    return (
        <div style={teamStyle} >
            <h3>players:{player}</h3>
            <button onClick={addPlayer} >Add player</button>
            <button onClick={ReducePlayer}>Reduce Player</button>
            </div>
    )
}
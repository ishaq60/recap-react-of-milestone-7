import React from "react";
import "./App.css";
import Person from "./Person";
import Singer from "./Singer";
import Book from "./Book";

// import Childeren from "./Childeren";

function App() {
  const actors=["shakib khan","josim","fardus","Manna","dipjol"]
  const singers=[
    {id:1, name:'Dr.Mafuzur Rahman',age:68},
    {name:'Eva Rahmwn',age:38},
    {name:'Eva Rahman,',age:42},
    {name:'Pritom Hasan',age:30}
];
const books= [
{name:"physics 1st paper",page:450,price:500},
{name:"Math 2st paper",page:350,price:500},
{name:"Biology 1st paper",page:450,price:500},
{name:"Chemiostry 2st paper",page:450,price:500},


]
  return (
    <>
      {/* <Childeren task="Learning react" isDone={true}></Childeren>
      <Childeren task=" Core Concept " isDone={false}></Childeren>
      <Childeren task="Try jsx" isDone={true}></Childeren>
      <Device name="laptop" price={55}></Device> */}
      <Person ></Person>
     

      {
        actors.map(actor =><Person name={actor}></Person>)
      }
       <Singer ></Singer>
       {
        singers.map(singer=><Singer singer={singer}></Singer>)
       }
       <Book></Book>
       {
        books.map(book=><Book book={book}></Book>)
       }

    </>
  );
}

// function Device(props) {
//   return (
//     <h2>
//       This device: {props.name} and price: {props.price}
//     </h2>
//   );
// }

export default App;

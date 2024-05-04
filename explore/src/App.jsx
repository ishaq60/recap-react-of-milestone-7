
import './App.css'

function App() {
 

  return (
    <>
  
  <Person></Person>
  <Device name="samsung" price="20000"></Device>
  <Device name="xiomi" price="220000"></Device>
  <Device name="samsung" price="20000"></Device>
    </>
  )
  function Person(){
    return <h1>hello</h1>
  }
}

function Device (Props){
  const {name,price}=Props
  return <h1>Device name:{name} and price {price}</h1>
}
export default App

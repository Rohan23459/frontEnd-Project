import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15
  let [counter,setCounter] = useState(15); // hook useState which is help to update of variable in whole UI 
  const addValue = ()=> {
      // console.log("clicked",counter);
      if(counter < 20){
        counter = counter+1;
        setCounter(counter);
      }
      
  }
  const removeValue = () =>{
    // console.log("clicked",counter);
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}>Add value</button>
      <br/>
      <button
      onClick={removeValue}>Remove value</button>
      {/* <p>footer : {counter}</p> */}
      
      
    </>
  )
}

export default App

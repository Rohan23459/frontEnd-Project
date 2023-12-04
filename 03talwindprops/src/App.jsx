import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myArr = [1,3,7];
  let myObject = {
      userName : "Rohan Vishwas",
      Age : 23,
      rollNo : 27
  }
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
    Talwind CSS
     </h1>
    <Card userName = "Rohan" arr = {myArr} user = {myObject} textButton = "Click Me"/>
    <Card userName = "Rohit" textButton = "Read Me" />

    </>
  )
}

export default App

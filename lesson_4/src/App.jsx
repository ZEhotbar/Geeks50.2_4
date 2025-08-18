
import { useState } from 'react'
import './App.css'
import List from './components/List'
import Block from './components/Block'

function App() {
  const [a,setA] = useState(0)


  const Cliks = () => {
    const b  = a + 1
    setA(b)
  }
  return <>
  <p>count: {a}</p>
  <button onClick={Cliks}>click mea</button>
  <List/>
  <Block/>
  </>
}

export default App

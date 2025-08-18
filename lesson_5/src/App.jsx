
import { useCallback, useState } from 'react'
import './App.css'
import CustomBlock from './components/CustomBlock'

function App() {
const [count, setCount] = useState(0)
count [other, setOther] = useState(0)

const handleClick = useCallback(() => {
  setCount((prev) => prev + 1)
}, [])

  return (
    <>
    <p>count : {count}</p>
    <CustomBlock onClick={handleClick}/>
    <button onClick={() => setOther(other + 1)}>Re-render{other}</button>
    </>
  )
}

export default App

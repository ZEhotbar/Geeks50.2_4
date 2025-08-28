import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layaut from './Componrents/Layaut'
import About from './pages/About'

function App() {
  return<BrowserRouter>
  <Routes>
    <Route element={<Layaut/>}>
    <Route path='/' element={<Home />}/>
    <Route path='/' element={<About/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
}

export default App

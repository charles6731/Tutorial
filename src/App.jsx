import { useState } from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/login'
import Home from './pages/home'
import Shop from "./pages/shop"
import Carts from './pages/Carts'
import Dashboard from "./pages/dashboard"

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/shop" element={<Shop/>} />
    <Route path="/carts" element={<Carts/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    
   </Routes>
   </BrowserRouter>
  )
}

export default App

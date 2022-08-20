import { useState } from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom"

import Home from './pages/home'
import Shop from "./pages/shop"

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/shop" element={<Shop/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App

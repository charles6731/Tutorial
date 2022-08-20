import { useState } from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom"

import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/shop" element={<Home/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App

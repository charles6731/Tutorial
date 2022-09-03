import React, {useEffect, useState} from 'react';
import Navbar from "../components/common/Navbar";
import { getStoredValue} from "../utils/storageHelper"
import Cart from '../components/cart/Cart'

function Carts() {
    // define a state, and use the getStoreValue function to get the value from the localStorage, if not found return[]
    const [carts,setCarts] = useState(JSON.parse(getStoredValue("cart")) || []);
    //console.log(carts)

useEffect(()=>{
    setCarts(JSON.parse(getStoredValue("cart")) || [])
},[])
  return (
    <div>
      <Navbar/>
      {carts.length > 0 ? carts.map((item,index) => <Cart product={item} />) :"No data found"}
    </div>
  )
}

export default Carts

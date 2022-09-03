import React, {useState} from 'react'
import {BsFillPlusSquareFill} from "react-icons/bs"
import {AiFillMinusSquare} from "react-icons/ai"
import { setStorage, getStoredValue} from "../../utils/storageHelper"

function Counter({qty, id}) {
    const [carts,setCarts] = useState(JSON.parse(getStoredValue("cart")) || []);
    const[cartQty,setCartQty] = useState (qty || 1);


    const handleValueChange = (action)=> {


        const newCart = [...carts];
       setCarts(
        // action is = increase, so if increase buutton is clicked +1 or not i.e minus button minus 1 from total
              newCart.map((item,i)=>{
                if(item.id ===id){
                if (action === "inrease")
                item.qty += 1;
                else  item.qty -=1;
                }
                return item;

              })
       );


      setStorage("cart" , JSON.stringify(carts));

    };

  return (
    <div style={{width: "100px", display: "flex"}}>
      <BsFillPlusSquareFill size={24} color="red" onClick={() => handleValueChange("inrease")}/>
      <input type="number" placeholder="qty" value={cartQty} onChange={(e) => setCartQty(e.target.value)} style={{ width: "50px" }}/>
      <AiFillMinusSquare size={24} color="green" onClick={() => handleValueChange("reduce")}/>
    </div>
  )
}

export default Counter

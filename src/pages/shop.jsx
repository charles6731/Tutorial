import React,{useState,UseEfect} from "react";
import Navbar from "../components/common/Navbar";
import Product from "../components/shop/Product"

function Shop(){
    const [products, setProducts] = useState([]);
    return(
        <div>
           <div>
           <Navbar/>
           </div>
           <div>
            <Product/>
           </div>
        </div>
       
    )
}
export default Shop;

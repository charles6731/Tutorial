import React, {useState} from "react";
import styles from "../shop/Shop.module.css"
import image1 from "../../assets/image 8.png"
import stars from "../../assets/Group 9.png"
import Button from 'react-bootstrap/Button';
import { setStorage, getStoredValue} from "../../utils/storageHelper"
import Counter from "./Counter";



function Cart({product}){
    const {title,image,category,price,qty,id} = product;
    // define a state, and use the getStoreValue function to get the value from the localStorage, if not found return[]
    const [carts,setCarts] = useState(JSON.parse(getStoredValue("cart")) || [])


   const  handleClick = () => {
    // create a new array and push the new product tp the array 
    const newCart =[...carts];
    // loop over newCart to remove the current object using filter function
  const newerCart = newCart.filter((item) => item.id !== id)
    // add new cart to storage
    console.log(setStorage("cart",JSON.stringify(newerCart)));
    // Update the state 
    setCarts(newerCart);
   };

    return(
        <div>
            <div className={styles.hold} >
                        
                <img src={image} alt="" className={styles.productImage} />
                 {/* { <h1 className={styles.title}>{title}</h1> }  */}
                <p className={styles.price}>{price}</p>
                 <p><img src={stars}  alt="" className="stars" /> <span className={styles.review}>(3.2% Review)</span></p> 
                 <small >qty : {qty}</small>
                <center ><p><Button className={styles.btn1} onClick={handleClick}>Remove Item</Button></p> </center>
                <Counter qty={qty} id={id}/>
                
            </div>
        </div>
    )
}
export default Cart;
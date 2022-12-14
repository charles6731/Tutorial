import React, {useState} from "react";
import styles from "./Shop.module.css"
import image1 from "../../assets/image 8.png"
import stars from "../../assets/Group 9.png"
import Button from 'react-bootstrap/Button';
import { setStorage, getStoredValue} from "../../utils/storageHelper"



function Product({product}){
    const {title,image,category,price,id} = product;
    // define a state, and use the getStoreValue function to get the value from the localStorage, if not found return[]
    const [carts,setCarts] = useState(JSON.parse(getStoredValue("cart")) || [])


   const  handleClick = () => {
    // create a new array and push the new product tp the array 
    const newCart =[...carts, {id, title, image , category, price, qty: 1}];
    // add new cart to storage
    console.log(setStorage("cart",JSON.stringify(newCart)));
    // Update the state 
    setCarts(newCart);
   };

    return(
        <div>
            <div className={styles.hold} onClick={handleClick}>
                        
                <img src={image} alt="" className={styles.productImage} />
                 {/* { <h1 className={styles.title}>{title}</h1> }  */}
                <p className={styles.price}>{price}</p>
                 <p><img src={stars}  alt="" className="stars" /> <span className={styles.review}>(3.2% Review)</span></p> 
                <center><p><Button className={styles.btn1}>Add to cart</Button></p> </center>
                
            </div>
        </div>
    )
}
export default Product;
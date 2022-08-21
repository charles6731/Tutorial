import styles from "./Shop.module.css"
import image1 from "../../assets/image 8.png"
import stars from "../../assets/Group 9.png"



function Product({product}){
    const {title,image,category,price,id} = product;


   const  handleClick = () => {
    console.log(product);
   };

    return(
        <div>
            <div className={styles.hold} onClick={handleClick}>
                        
                <img src={image} alt="" className={styles.productImage} />
                 {/* { <h1 className={styles.title}>{title}</h1> }  */}
                <p className={styles.price}>{price}</p>
                 <p><img src={stars}  alt="" className="stars" /> <span className={styles.review}>(3.2% Review)</span></p> 
                <center><p><button className={styles.btn1}>Order</button></p> </center>
            </div>
        </div>
    )
}
export default Product;
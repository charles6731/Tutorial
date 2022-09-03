import React,{useState,UseEfect, useEffect} from "react";
import Navbar from "../components/common/Navbar";
import Product from "../components/shop/Product"
import styles from "../components/shop/Shop.module.css"


function Shop(){
    const [products, setProducts] = useState([]);

    useEffect(function() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setProducts(json);

            });
    }, []);
    return(
        <section>
            <div><Navbar/></div>
            <div className={styles.container}>
                { 
                products.length > 0 ? (
                    products.map( (product) =>(
                        <div><Product product={product} /></div>
                    ))
                ) : (
                    <div>Loading.....</div>
                )
                 
                }
            </div>
          
        </section>
    );
}
export default Shop;

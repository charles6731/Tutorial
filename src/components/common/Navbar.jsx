import { useState } from "react";
import styles from "./header.module.css"
import logo from "../../assets/logo.png"
import { getStoredValue } from "../../utils/storageHelper"

function Navbar(){
    const [carts,setCarts] = useState(JSON.parse(getStoredValue("cart")) || []);


    return(
        <nav className="sticky-top">
            <div><img src={logo} alt="" /></div>
            <ul className={styles.list}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li><a href="/services">Services</a></li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/help">Help</a>
                </li>
                <li>
                    {/* To display the number carts */}
                    <a href="/carts">carts  {carts.lenghth}</a>
                </li>
            </ul>
            <button>
                <a href="/shop">Shop Up</a>
            </button>
            


        </nav>
    )
}
export default Navbar;
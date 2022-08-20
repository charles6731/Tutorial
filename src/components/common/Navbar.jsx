import styles from "./header.module.css"
import logo from "../../assets/logo.png"

function Navbar(){
    return(
        <nav>
            <div><img src={logo} alt="" /></div>
            <ul className={styles.list}>
                <li>
                    <a href="/home">Home</a>
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
                    <a href=""></a>
                </li>
            </ul>
            <button>
                <a href="">Contact Us</a>
            </button>

        </nav>
    )
}
export default Navbar;
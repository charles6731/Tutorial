import styles from "./header.module.css"
import logo from "../../assets/logo.png"

function Navbar(){
    return(
        <nav>
            <div><img src={logo} alt="" /></div>
            <ul className={styles.list}>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Help</li>
                <li>Help</li>
            </ul>
            <button>Contact Us</button>

        </nav>
    )
}
export default Navbar;
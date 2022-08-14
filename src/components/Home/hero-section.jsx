import styles from "./new.module.css"
import image from "../../assets/image5.png"
import background from "../../assets/istockphoto.png"
import newlogo from "../../assets/icon.png"
import image2 from "../../assets/slant.png"
import image3 from "../../assets/slant2.png"


function HeroSection() {
    return(
        
        
            <div className="row" style={{backgroundImage: `url(${background})`}}>
                    <div className="col-sm-12 col-md-6 col-xl-6">
                    <h1 className={styles.header}>Fresh grocery delivery services, <br />
                    we bring the store to your 
                    door step.</h1>
                        <div className={styles.sect}>
                        <p className="mt-3">We serve the best of fresh, delicious ,nutrient, rich
                        and healthy food.Fastest delivery and easy pickup.</p>
                    <button className={styles.btn1}>Shop Now</button><span className={styles.newlogo}><img src={newlogo} alt="" /> Order Process</span>
                    </div>
                   <p className="mt-3"><img src={image2} alt="" /></p>
                    <p className={styles.slantt}><img src={image3} alt="" /></p>
        
                    <p className={styles.slant2}>For Better Services Download Now</p>
                       
                    
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-6 mt-5" >
                        <img src={image} alt="" className={styles.newimg} />
                    </div>
        </div>
       
       
        
        
        
    )
}

export default HeroSection;
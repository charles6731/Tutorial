import image1 from "../../assets/image 8.png"
import stars from "../../assets/Group 9.png"



function Product(){
    return(
        <div>
            <div className="hold">
                        <img src={image1} alt="" className="img"/>
                        <h4 className="name">CVarrot</h4 >
                        <p><img src={stars}  alt="" className="stars" /> <span className="review">(3.2% Review)</span></p>
                        <p><button className="button">Order</button></p>
                        </div>
        </div>
    )
}
export default Product;
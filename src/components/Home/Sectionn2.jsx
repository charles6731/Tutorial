import React from "react";
import  "./section2.css"
import image1 from "../../assets/Ellipse 1.png"
import image2 from "../../assets/Ellipse 2.png"
import image3 from "../../assets/Ellipse 3.png"
import image4 from "../../assets/Ellipse 4.png"
import image5 from "../../assets/Ellipse 5.png"
import image6 from "../../assets/Ellipse 6.png"
import image8 from "../../assets/Ellipse 8.png"
import image9 from "../../assets/Ellipse 9.png"
import guy from "../../assets/image 6.png"
function  HeroSection2(){
    const [Popular, setPopular] = React.useState("");

    React.useEffect(() => {
        setTimeout(() => {
            setPopular([
                {id:1, name: "Tomatoes", image: "image1"},
                {id:2, name: "Carrot", image: "image2"},
                {id:3, name: "Cucumber", image: "image3"},
                {id:4, name: "Yellow Pepper", image: "image4"},
                {id:5, name: "Oranges", image: "image5"},
                {id:6, namCe: "Apple", image: "image6"},
                {id:7, name: "Grapes", image: "image8"},
                {id:8, name: "Strawberrt", image: "image9"},
            ]);
        }, 3000);
    }, []);
    return(
        <div>
            <section className="sec1">
                <h2 id="">Popular Items {value} </h2>
                <div className="imageholder">
                    <div className="hold">
                        <img src={image1} alt="" className="img"/>
                        <h4 >Tomatoe</h4 >
                    </div>
                    <div>
                        <img src={image2} alt="" className="img" />
                        <h4 >Carrot</h4 >
                    </div> <div>
                        <img src={image3} alt="" className="img" />
                        <h4 >Cucumber</h4 >
                    </div> <div className="">
                        <img src={image4} alt="" className="img" />
                        <h4 >Yellow Pepper</h4 >
                    </div> <div className="">
                        <img src={image5} alt="" className="img" />
                        <h4 className="" >Oranges</h4 >
                    </div> <div>
                        <img src={image6} alt="" className="img" />
                        <h4 >Apple</h4 >
                    </div> <div>
                        <img src={image8} alt="" className="img" />
                        <h4 >Grapes</h4 >
                    </div>
                    <div>
                        <img src={image9} alt="" className="img" />
                        <h4 >Strawberry</h4 >
                    </div>
                    
                </div>
            </section>
            <section className="sect2">
                <div>
                    <div className="bg"><img src={guy} alt="" /></div>
                </div>
                <div className="newsect mt-">
                    <h2>Why  you should use our service?</h2>
                   <div className="newdiv">
                   <div className="circle"></div><span className="newp">We always provides the best and fastest <br />
                    services for all our cutomer's.</span>
                   </div>
                   <div className="newdiv">
                   <div className="circle"></div><span className="newp"> Fast and reliable delivery  <br />
                    services for all our cutomer's.</span>
                   </div>
                   <div className="newdiv">
                   <div className="circle"></div><span className="newp">No additional fees for orders</span>
                   </div>
                   <div className="newdiv">
                   <div className="circle"></div><span className="newp">User friendly App</span>
                   </div>
                </div>
            </section>
        </div>
     )
}
export default HeroSection2;
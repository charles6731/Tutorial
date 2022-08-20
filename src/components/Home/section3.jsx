import React, {useEffect} from "react";
import  "./section3.css"
import image1 from "../../assets/image 8.png"
import image2 from "../../assets/image 9.png"
import image3 from "../../assets/image 11.png"
import image4 from "../../assets/goat-meat-1kg-removebg-preview 1.png"
import image5 from "../../assets/image13.png"
import image6 from "../../assets/ponmo-600x647-removebg-preview 1.png"
import image7 from "../../assets/image 14.png"
import image8 from "../../assets/image 15.png"
import stars from "../../assets/Group 9.png"
function HeroSection3(){
    const [Popular, setPopular] = React.useState("");
    React.useEffect(()=> {
        setTimeout(()=>{
            setPopular([
                {image:image1, name:"Tomatoes", image2:stars, text:"(3.2% Review)",button:<button className="button">Order</button>},
                {image:image2, name:"Potatoes", image2:stars, text:"(3.2% Review)",button:<button className="button">Order</button>},
                {image:image3, name:"Apple", image2:stars, text:"(3.2% Review)",button:<button className="button">Order</button>},
                {image:image4, name:"Meat", image2:stars, text:"(3.2% Review)",button:<button className="button">Order</button>},
                {image:image5, name:"Groundnot Oil", image2:stars, text:"(3.2% Review)",button:<button className="button">Order</button>},
                {image:image6, name:"Pomo", image2:stars, text:"(3.2% Review)",button:<button className="button">Order</button>},
                {image:image7, name:"Onions", image2:stars, text:"(3.2% Review)",button:<button className="button">Order</button>},
                {image:image8, name:"onions", image2:stars, text:"(3.2% Review)",button:<button className="button">Order</button>},
            ])
        }, 3000)
    }, [])
    useEffect(function (){}, [])
    return(
       <div>
        <section className="sect">
            <h2>Fresh quality Fruits and Vegetables just <br />
             for your Consumption</h2>
             <div className="box-holder">
             {                            
                   Popular? Popular.map(function (item,index){
                        return (
                            <div className="hold" key={item.id}>
                        <img src={item.image} alt="" className="img"/>
                        <h4 className="name">{item.name}</h4 >
                        <p><img src={item.image2}  alt="" className="stars" /> <span className="review">(3.2% Review)</span></p>
                        <p>{item.button}</p>
                        </div>
                        
                        );
                    }) : (<div>Loading..</div>
                   )}
             </div>
        </section>
       <section></section>
       </div>
    )
}
export default HeroSection3;
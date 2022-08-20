import Navbar from "../components/common/Navbar"
import HeroSection from "../components/Home/hero-section"
import HeroSection2 from "../components/Home/Sectionn2"
import HeroSection3 from "../components/Home/section3"

function Home(){
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <HeroSection2/>
            <HeroSection3/>
        </div>
    )
}
export default Home;


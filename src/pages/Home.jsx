import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import ProgamEvent from "../components/ProgramEvent";
const Home=()=>{
    return(
        <>
             <div className="conteneur">
                <div className="menu">
                    <div className="Navbar">
                        <Navbar/>
                    </div>
                    <div className="carousel">
                        <Carousel/>
                    </div>
                </div>
               <div className="programme-event">
                 <ProgamEvent/>
               </div>
                <div className="box-contenu">
                    <Presentation/>
                </div>
            </div>

        </>
    )
}

export default Home;
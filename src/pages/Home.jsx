
import Actions from "../components/Actions";
import Actualite from "../components/Actualite";
import Bannier from "../components/Bannier";
import Carousel from "../components/Carousel";
import Direct from "../components/Direct";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewLatter from "../components/NewLatter";
import Partenaire from "../components/Partenaire";
import ProgamEvent from "../components/ProgramEvent";
import TopNavbar from "../components/ToNavbar";
import VosDons from "../components/VosDons";

const Home=()=>{

    window.addEventListener("scroll", function() {
        var wrap = document.querySelector('.Navbar')
        wrap.classList.toggle("fixed",this.window.scrollY>0)
        
      });
     

    return(
        <>
             <div className="conteneur">
                <div className="menu">
                    <div className="TopNavbar">
                        <TopNavbar/>
                    </div>
                    <div className="Navbar" >
                        <Navbar/>
                    </div>
                    <div className="carousel">
                        <Carousel/>
                    </div>
                </div>
                <div className="actions">
                <Actions/>
               </div>
               <div className="direct-">
                <Direct/>
               </div>
                <div className="programme-event">
                 <ProgamEvent/>
               </div>
               <div className="bannier-1">
                   <Bannier/>
               </div>
               <div className="actualite-">
                <Actualite/>
               </div>
               <div className="newlatter">
                    <NewLatter/>
               </div>
               <div className="vosdons">
                 <VosDons/>
               </div>
               
                <div className="nos-partenaire">
                    <Partenaire/>
                </div>

                <hr />
                <Footer/>
            </div>

        </>
    )
}

export default Home;
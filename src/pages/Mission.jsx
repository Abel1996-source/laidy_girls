import Bannier from "../components/Bannier";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Mission=()=>{
    return(
        <>
            <div>
                <div className="navbr-m">
                    <Navbar/>
                </div>
                <div className="caous">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./IMG_16112028Copy29_1 1.png" className="d-block w-100" alt="..."/>
                        <div class="carousel-caption  d-md-block">
                            <p>AIDER, NOTRE VOCATION</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="content-m">
                        <div className="text-m">
                            <p>
                            LADIE’S JOY est l’un des principaux organismes contribuant à 
                            l’autonomisation, à la valorisation des droits et valeurs des 
                            femmes et filles. Dans ce cadre, LADIE’S JOY encourage dans toutes
                             ses activités la protection des femmes et filles contre les violences
                              physiques, morales et favorise leur sensibilisation sur les 
                              comportements à risque afin d’éviter les maladies incurables a
                              insi que leur intégration dans la vie sociétale.
                            </p>
                        </div>
                        <div className="banier-m">
                            <Bannier/>
                            <Bannier/>
                            <Bannier/>
                            <Bannier/>
                        </div>
                </div>
                <div className="footer-m">
                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default Mission;
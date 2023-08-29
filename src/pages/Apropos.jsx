import Actions from "../components/Actions";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Apropos=()=>{
    return(
        <>
            <div>
                <div className="navbar">
                    <Navbar/>
                </div>
                <div className="caous">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./IMG_16112028Copy29_1 1.png" className="d-block w-100" alt="..."/>
                        <div class="carousel-caption  d-md-block">
                            <p>PLUS PROCHE DES FEMMES ET DES JEUNES FILLES</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="contenu-propos">
                    <div className="item-text">
                        <div className="text-">
                            <p>
                                Formée en 2022, L’ONG LADIE’S JOY (La joie d’une dame) à été mise en place suite au contexte
                                de l’autonomisation des femmes. Les femmes sont au cœur des équilibres familiaux, culturels,
                                sanitaire et sociaux. Elles jouent un rôle central en matière de développement et d’éducation,
                                il est plus important que jamais de promouvoir l’autonomisation des femmes et filles ainsi que
                                la mise en exergue de leurs valeurs et leurs droits.
                            </p>
                        </div>
                        <div className="text-">
                            <p>
                                Présente en Côte d’Ivoire, LADIE’S JOY est l’un des principaux organismes contribuant à 
                                l’autonomisation, à la valorisation des droits et valeurs des femmes et filles. Dans ce cadre,
                                LADIE’S JOY encourage dans toutes ses activités la protection des femmes et filles contre les 
                                violences physiques, morales et favorise leur sensibilisation sur les comportements à risque afin 
                                d’éviter les maladies incurables.
                            </p>
                        </div>
                    </div>
                    <div className="vision">
                        <div className="header-vision">
                             <h2 className="head" style={{ color: "#86179A" }}>
                                LA VISION de LADIE’S JOY
                            </h2>
                        </div>
                        <div className="content-vision">
                            <p>
                                La vision claire et motivante de LADIE’S JOY reflète déjà la volonté de communiquer avec les équipes et avec les partenaires. Elle est donc le premier pas vers une communication interne
                                et externe efficaces et bien ciblée : " à l’autonomisation de la femme et la jeune fille ainsi qu’à la mise en exergue de leurs valeurs et droits sur tout le territoire Ivoirien."
                                Les résultats essentiels recherché sont les suivants : La lutte contre les violences basées sur le genre, favorisant la sécurité et la stabilité familiale et sociale ;Accorder une place 
                                importante aux femmes tout comme les hommes dans la société familiale. L’augmentation du taux d’alphabétisation de la jeune fille sur tout le territoire Ivoirien par la scolarisation et la sensibilisation.
                                Stopper les MST et sa prorogation par la mise en place de campagne de sensibilisation sur le dépistage et la vaccination.
                                La réduction du taux de chômage de la femme et la jeune fille par des programmes d’insertion socio-professionnelle
                                Les secteurs d’activités sur lesquels elle se focalise seront les suivants : L’instauration du 
                                système éducatif et sanitaire. L’adoption du mode de l’entreprenariat féminine. Le renforcement de la protection de la femme et la jeune fille.
                            </p>
                        </div>
                    </div>
                    <div className="item-propos">
                        <Actions/>
                    </div>
                </div>
                <div className="pied-de-page">
                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default Apropos;
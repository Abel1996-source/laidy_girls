import { Link } from "react-router-dom";
const Actualite=()=>{
    return(
        <>
            <div className="news">
                <h2 className="head" style={{ color: "#86179A" }}>
                    ACTUALITÉS DE L'ASSOCIATION
                </h2>
                <div className="content-news">
                    <div className="info">
                        <div className="blocs-">
                            <div className="card bg-dark text-white">
                                <img src="./img/actu.png" className="card-img" alt="..."/>
                                <div className="card-img-overlay" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <p className="card-text" >Soirée projection : La lutte contre le mariage forcé.</p>
                                </div>
                            </div>
                        </div>
                        <div className="blocs-">
                            <div className="card bg-dark text-white">
                                <img src="./img/actu1.png" className="card-img" alt="..."/>
                                <div className="card-img-overlay" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <p className="card-text" >Table ronde des femmes : L’éducation aux droits des femmes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="blocs-">
                            <div className="card bg-dark text-white">
                                <img src="./img/actu2.png" className="card-img" alt="..."/>
                                <div className="card-img-overlay" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <p className="card-text" >Cérémonie de récompense : Plus de 20 femmes serons diplômés.</p>
                                </div>
                            </div>
                        </div>
                        <div className="blocs-">
                            <div className="card bg-dark text-white">
                                <img src="./img/actu3.png" className="card-img" alt="..."/>
                                <div className="card-img-overlay" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <p className="card-text" >Journée de sensibilisation : Sur le cancer du col de l’utérus.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="liens">
                       <Link to="#">
                            <div>
                                    <span>Voir toutes les actualités de l'association</span>
                                    <span><i className="bi bi-arrow-right-square-fill"></i></span>
                            </div>
                       </Link>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Actualite;
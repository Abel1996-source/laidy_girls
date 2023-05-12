import { Link } from "react-router-dom";

const ProgamEvent=()=>{
    return(
        <>
            <div className="content-event">
                <div className="header">
                    <h2 className="head" style={{color: "#86179A", textTransform:"uppercase"}}>LADIE’S JOY, pour un changement de destin féminin</h2>
                </div>
                <div className="row row-cols-2 row-cols-md-4  g-2">
                    <div className="col">
                       
                            <div className="card ">
                                <img src="./12_Yoko.png" className="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title " style={{fontSize:"12px"}}><i className="bi bi-eye" style={{marginRight:"3px", cursor:"pointer"}}></i>Appel d’urgence</h5>
                                <h5 style={{fontSize:"14px"}}>
                                    Les enfants exposés à une sécheresse mortelle
                                    dans la Corne de l'Afrique
                                </h5>
                                <p class="card-text" >
                                    La crise de l’eau entraîne des effets dévastateurs à
                                    Djibouti, en Éthiopie, au Kenya et en Somalie.
                                </p>
                                <Link to="/" className="to-a">
                                    <button className="btn btn-success" style={{fontSize:"12px"}}>Voir plus</button>
                                </Link>
                                </div>
                            </div>
                       
                    </div>
                     
                </div>
            </div>
        </>
    )
}
export default ProgamEvent;
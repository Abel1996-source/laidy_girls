import { Link } from "react-router-dom";
const Bannier=()=>{
    return(
        <>
            <div className="content-bannier">
                <div className="image-">
                    <img src="./personne.png" alt="" className="ba" />
                </div>
                <div className="context-ba">
                    <div className="item-ba ba-">
                        <p>AGISSEZ AVEC LADIE’S JOY REJOIGNEZ-NOUS</p>
                    </div>
                    <div className="item-ba corps">
                        <p>
                            Les femmes et jeunes filles ont besoin de défenseurs. Engagez-vous, faites-vous entendre, devenez bénévole ou donateur et offrez à chaque femme une nouvelle images d’émancipation et d’intégration sociale.
                        </p>
                    </div>
                    <div className="item-ba lien" >
                        <Link to="">
                            <p><i className="bi bi-box-arrow-right" style={{marginRight:"0.5rem"}}></i>Rejoindre maintenant</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bannier;
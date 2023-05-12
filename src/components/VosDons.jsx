import { Link } from "react-router-dom";
const VosDons=()=>{
    return(
        <>
             <div className="direct vosdon">
                <div className="titre-"><h3>VOS DONS TRANSFORME DES VIES</h3></div>
                <div className="vos_content">
                    <div className="card_">
                        <div className="price_">
                            <span className="prix_">
                                25.000 FCFA
                            </span>
                            <div className="body_">
                            Vous permettez à une fillette d’être scolarisé.
                            </div>
                        </div>
                        <div className="img_"> 
                            <img src="./img/dons1.png" alt="" />
                        </div>
                        <div className="dons_">
                            <Link>JE DONNE</Link>
                        </div>
                    </div>
                    <div className="card_">
                        <div className="price_">
                                <span className="prix_">
                                    30.000 FCFA
                                </span>
                                <div className="body_">
                                    Vous fournissez à une veuve un kit alimentaire.
                                </div>
                            </div>
                            <div className="img_"> 
                                <img src="./img/dons2.png" alt="" />
                            </div>
                            <div className="dons_">
                                <Link>JE DONNE</Link>
                            </div>
                        </div>
                    <div className="card_">
                        <div className="price_">
                                <span className="prix_">
                                    100.000 FCFA
                                </span>
                                <div className="body_">
                                     Vous donnez la chance à une femme de se former à un métier.
                                </div>
                            </div>
                            <div className="img_"> 
                                <img src="./img/dons3.png" alt="" />
                            </div>
                            <div className="dons_">
                                <Link>JE DONNE</Link>
                            </div>
                        </div>
                    </div>
                <div className="vos_bottom">
                    <div className="vos_pourcent">
                        <span>94,5%</span>
                        <p>de nos ressources est affectées aux femmes et jeunes filles</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VosDons;
import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <>
        
            <div className="footer">
                  
                <div className="foot">
                    <div>
                        <Link to='/' className="logo  " >
                            <img src="./img/logo1.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="info_foot">
                        <h4>NOUS CONTACTER</h4>
                        <p>
                            ONG LADIE’S JOY Laurier 15 rue du bonheur,Cocody, Abidjan, Côte d'Ivoire 
                            Tel : +225 07 58 93 37 64 E-mail : contact@ladiesjoy.com
                        </p>
                    </div>
                </div>
                <div className="foot">
                    <div className="info_foot item_f">
                        <h4>NOUS SOUTENIR</h4>
                        <p>
                          Devenez partenaire <br/> Devenez bénévole Faire un don
                        </p>
                    </div>
                </div>
                <div className="foot">
                <div className="info_foot">
                        <h4>SUIVEZ-NOUS</h4>
                        <div className="face">
                            <Link to="#"> <img src="./img/facebook.png" alt="" /></Link>
                           <Link to="#"> <img src="./img/instagram.png" alt="" /></Link>
                           <Link to="#"><img src="./img/linkedin.png" alt="" /></Link>
                           <Link to="#"> <img src="./img/youtube.png" alt="" /></Link>
                        </div>
                        <div className="other">
                            <Link to="#"> <img src="./img/TAMPON.png" alt="" /></Link>
                           <Link to="#"> <img src="./img/759.png" alt="" /></Link>
                           
                        </div>
                    </div>
                </div>
              
            </div>
        </>
    )
}
export default Footer;
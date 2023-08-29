
import { Link } from "react-router-dom";
import Lateral from "./Lateral";

const Navbar=()=>{

   let montant=document.querySelectorAll('.uli > li');
   let bouton=document.querySelectorAll('.select > span')

   bouton.forEach((item)=>{
    item.addEventListener('click',()=>{
        bouton.forEach((elt)=>{
            if(elt!==item && elt.classList.contains("activer")){
                elt.classList.remove("activer")
            }
        })
        item.classList.add('activer')
    })
   })

   montant.forEach((item) => {
        item.addEventListener('click',() => {
            montant.forEach((elt)=>{
                if(elt!==item && elt.classList.contains("active")){
                    elt.classList.remove("active")
                }
            })

            item.classList.add('active');
        });
    });
   
  
   console.log(montant);
    return(
        <>
            
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid items-navbar">
                <span className="nav-lateral"><Lateral/></span>
                   <Link to='/' className="logo  " >
                        <img src="./LOGO.png" alt="logo" />
                   </Link>
                   <div className="item- nav"> 
                        <div className="dropdown ong-p">
                            <button className="btn btn-white dropdown-toggle item- " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>QUI SOMME-NOUS</span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link to="/à-propos" className="dropdown-item lat" >Présentation</Link></li>
                                <li><Link to="" className="dropdown-item lat" >Nos actions</Link></li>
                            </ul>
                        </div>
                   </div>
                   <div className="item- nav"><Link to='/' className="a"><span className="lat">ACTUALITES</span></Link></div>
                   <div className="dropdown information">
                            <button className="btn btn-white dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <span> MISSIONS HUMANITAIRES</span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link to="/nos-missions" className="dropdown-item lat" >Missions</Link></li>
                                <li><Link to="" className="dropdown-item lat" >FAQ</Link></li>
                            </ul>
                    </div>
                   <div className="item- nav"><Link to="/contact" className="a"><span className="lat">J’AGIS</span></Link></div>
                   <div className="item- nav ">
                    <button type="button" className="btn btn-dark " data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Fais un don
                    </button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel" style={{backgroundColor:"#86179A", padding:"0.7rem",color:"#ffffff"}}>JE FAIS UN DON </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{backgroundColor:"#02A7B0"}}>
                           <form >
                                <div className="select">
                                    <span className="activer">MENSUEL</span>
                                    <span>PONCTUEL</span>
                                </div>
                                <div className="montant">
                                   <ul className="uli">
                                        <li>
                                            <span className="price">10.000</span>
                                            <span className="devise">FCFA</span>
                                         </li>
                                        <li>
                                            <span className="price">50.000</span>
                                            <span className="devise">FCFA</span>
                                        </li>
                                        <li className="active">
                                            <span className="price">100.000</span>
                                            <span className="devise">FCFA</span>
                                        </li>
                                   </ul>
                                </div>
                                <div className="montant-libre">
                                    <input type="text" className="montant-" name="monatnt" id="argent" placeholder="Montant libre           FCFA" />
                                </div>
                                <div className="submit">
                                    <button type="submit" className="valider">JE DONNE</button>
                                </div>
                           </form>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* <div  className=" don" ><Link to=""><span>Fais un don</span></Link> </div> */}
                   </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
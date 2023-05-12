
import { Link } from "react-router-dom";
import Lateral from "./Lateral";

const Navbar=()=>{
   
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
                                <li><Link to="" className="dropdown-item lat" >Présentation</Link></li>
                                <li><Link to="" className="dropdown-item lat" >Nos actions</Link></li>
                                <li><Link to="" className="dropdown-item lat" >Nos Partenaires</Link></li>
                            </ul>
                        </div>
                   </div>
                   <div className="item- nav"><Link to='/' className="a"><span className="lat">ACTUALITES</span></Link></div>
                   <div className="dropdown information">
                            <button className="btn btn-white dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <span> MISSIONS HUMANITAIRES</span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link to="" className="dropdown-item lat" >Missions</Link></li>
                                <li><Link to="" className="dropdown-item lat" >FAQ</Link></li>
                            </ul>
                    </div>
                   <div className="item- nav"><Link to="/contact" className="a"><span className="lat">J’AGIS</span></Link></div>
                   <div className="item- nav ">
                    <div  className=" don" ><Link to=""><i className="bi bi-heart-fill"></i><span>Fais un don</span></Link> </div>
                   </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

import { Link } from "react-router-dom";
import Lateral from "./Lateral";

const Navbar=()=>{
   
    return(
        <>
            
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid items-navbar">
                <span className="nav-lateral"><Lateral/></span>
                   <Link to='/' className="logo btn btn-dark">
                        LOGO
                   </Link>
                   <div className="item- nav"> <Link to='/' className="a"><i className="bi bi-house-door-fill" style={{color:"red",marginRight:"4px"}} title="Home"></i><span className="lat">Home</span></Link></div>
                   <div className="item- nav"> <Link to='/' className="a"><i class="bi bi-question-lg" style={{color:"red",marginRight:"4px"}} title="About"></i><span className="lat">A Propos</span></Link></div>
                   <div className="item- nav"><Link to='/' className="a"><i className="bi bi-lightning-charge-fill " style={{color:"red",marginRight:"4px"}} title="Activités"></i><span className="lat">Actions</span></Link></div>
                   <div className="item- nav"><Link to="/" className="a"><i className="bi bi-stopwatch-fill" style={{color:"red",marginRight:"4px"}} title="Evènement"></i><span className="lat">Evènements</span></Link></div>
                   <div className="item- nav"><Link to="/" className="a"><i className="bi bi-telephone-fill" style={{color:"red",marginRight:"4px"}} title="Contact"></i><span className="lat">Contacts</span></Link></div>
                   <div className="item- nav ">
                    <button type="button" className="btn btn-danger don" >Fais un don </button>
                   </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
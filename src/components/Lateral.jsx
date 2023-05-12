import { Link } from "react-router-dom";

const Lateral =()=>{
    return(
        <>
        <button className="nav-lateral btn btn-light "type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="bi bi-text-left"></i></button>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                    <Link to='/' className="logo ">
                        <img src="./LOGO.png" alt="logo principal" />
                   </Link>
                </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr />
            <div className="offcanvas-body">
                <div className="item-1 nav"> <Link to='/' className="a"><span className=" lat1 ">Accueil</span></Link></div>
                   <div className="item-2 nav"><Link to='/' className="a"><span className="lat1">Tout savoir sur l'ONG</span></Link></div>
                   <div className="item-3 nav"><Link to="/" className="a"><span className="lat1">Nos actions</span></Link></div>
                   <div className="item-3 nav"><Link to="/" className="a"><span className="lat1">Nos Partenaires</span></Link></div>
                   <div className="item-3 nav"> <Link to='/' className="a"><span className="lat1">Nos actualités</span></Link></div>
                   <div className="item-3 nav"> <Link to='/' className="a"><span className="lat1">Nos publications</span></Link></div>
                   <div className="item-3 nav"> <Link to='/' className="a"><span className="lat1">Devienir partenaire</span></Link></div>
                   <div className="item-3 nav"> <Link to='/' className="a"><span className="lat1">Contacts & Aide</span></Link></div>
                   <div className="item-4 nav ">
                        <div  className=" don" ><Link to=""><i className="bi bi-heart-fill"></i><span>Fais un don</span></Link> </div>
                   </div>
                </div>
            </div>
        </>
    )
}
export default Lateral;
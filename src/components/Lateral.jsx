import { Link } from "react-router-dom";

const Lateral =()=>{
    return(
        <>
        <button className="nav-lateral btn btn-light "type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="bi bi-text-left"></i></button>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                    <Link to='/' className="logo btn btn-dark">
                        LOGO
                   </Link>
                </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr />
            <div className="offcanvas-body">
                <div className="item-1 nav"> <Link to='/' className="a"><i className="bi bi-house-door-fill" style={{color:"red",marginRight:"4px"}} title="Home"></i><span className=" lat1">Home</span></Link></div>
                   <div className="item-2 nav"><Link to='/' className="a"><i className="bi bi-lightning-charge-fill " style={{color:"red",marginRight:"4px"}} title="Activités"></i><span className="lat1">Actions</span></Link></div>
                   <div className="item-3 nav"><Link to="/" className="a"><i className="bi bi-stopwatch-fill" style={{color:"red",marginRight:"4px"}} title="Evènement"></i><span className="lat1">Evènements</span></Link></div>
                   <div className="item-3 nav"><Link to="/" className="a"><i className="bi bi-telephone-fill" style={{color:"red",marginRight:"4px"}} title="Contact"></i><span className="lat1">Contacts</span></Link></div>
                   <div className="item-3 nav"> <Link to='/' className="a"><i className="bi bi-question-lg" style={{color:"red",marginRight:"4px"}} title="About"></i><span className="lat1">A propos</span></Link></div>
                   <div className="item-4 nav ">
                    <button type="button" className="btn btn-danger ">Fais un dons </button>
                   </div>
                </div>
            </div>
        </>
    )
}
export default Lateral;
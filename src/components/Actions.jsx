import { Link } from "react-router-dom";
const Actions = () => {
  return (
    <>
      <div className="content-actions">
        <div className="header-actions">
          <h2 className="head" style={{ color: "#86179A" }}>
            LE TRAVAIL DE LADIE’S JOY
          </h2>
          <div className="TEXT">
            <p>
              Découvrez les actions de LADEI’S JOY pour l’autonomisation de la
              femmes et la défense des droits et valeurs des jeunes filles.
            </p>
          </div>
        </div>
        <div className="action">
          <div className="action-item">
            <span><Link to="#">Lutte contre les Violences Basées sur le genre</Link> </span>
            <span><Link to="#">Sensibilisation sur l'émancipation du genre</Link></span>
            <span><Link to="#"> Promotion de l’alphabétisation de la jeune fille</Link></span>
          </div>
          <div className="action-item">
            <span><Link to="#">Éducation aux droits de la femme</Link> </span>
            <span><Link to="#">Conseil et référence des cas de VIH-SIDA</Link></span>
            <span><Link to="#">Sensibilisation sur le VIH-SIDA</Link></span>
          </div>
          <div className="action-item">
            <span><Link to="#">Sensibilisation sur la vaccination contre le cancer du col de l'utérus</Link> </span>
            <span><Link to="#">Aide à l'insertion socio-professionnelle des jeunes filles</Link></span>
            <span><Link to="#">Dépistage du cancer du col de l'utérus et du cancer du sein</Link></span>
          </div>
          <div  className=" all-actu all-action" ><Link to=""><span>DECOUVREZ NOTRE TRAVAIL</span></Link> </div>
        </div>
      </div>
    </>
  );
};

export default Actions;

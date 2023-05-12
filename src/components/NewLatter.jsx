const NewLatter=()=>{
   
    return(
        <>
            <div className="newlatter-content">
                <div className="titre-newlatter">
                    <h2 className="head" style={{ color: "#86179A" }}>
                        RESTEZ INFORMÉ(E) DE NOS ACTIONS
                    </h2>
                </div>
                <div className="content-new">
                    Vos coordonnées sont utilisées pour vous envoyer nos actualités et faire appel à 
                    votre générosité. Vous pouvez à tout moment utiliser le lien de désabonnement 
                    intégré dans la newsletter.
                </div>
                <div className="row formulaire">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Prénom" aria-label="Prénom"/>
                    </div>
                    <div className="col">
                        <input type="email" className="form-control" placeholder="Email" aria-label="Email"/>
                    </div>
                    <div className="col submit">
                        <input type="submit" className="form-control" />
                    </div>
                </div>
               
            </div>

        </>
    )
}
export default NewLatter;
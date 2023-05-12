const Carousel=()=>{
    return(
        <>
           <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./IMG_16112028Copy29_1 1.png" className="d-block w-100" alt="..."/>
                        <div class="carousel-caption  d-md-block">
                            <p>Devenez une femme épanouis</p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src="./IMG_16112028Copy29_1 1.png" className="d-block w-100" alt="..."/>
                        <div class="carousel-caption  d-md-block">
                            <p>Devenez une femme épanouis</p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src="./IMG_16112028Copy29_1 1.png" className="d-block w-100" alt="..."/>
                        <div class="carousel-caption  d-md-block">
                            <p>Devenez une femme épanouis</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </>
    )
}
export default Carousel;
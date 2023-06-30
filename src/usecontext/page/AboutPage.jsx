
export const AboutPage = () => {
  return (
    < >

      <br />


      <div id="carouselExampleFade" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./src/assets/img/PureBankT.png" className="d-block w-100 " alt="..." />
              <div className="carousel-caption d-none d-md-block text-dark">
              </div>
          </div>
          <div className="carousel-item">
            <img src="./src/assets/img/about1.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block text-dark ">
                <p >"Construyendo un futuro financiero sólido".</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src="./src/assets/img/about2.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block text-dark ">  
                <p >"Hacemos tus sueños realidad".</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src="./src/assets/img/about3.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block text-dark ">  
                <p >"Tu socio financiero de confianza".</p>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next dark" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}

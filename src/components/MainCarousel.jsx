import React from "react";


function MainCarousel(){
    return(
        <div className="mainCarousel">
            <div id="carouselExampleDark" className="mainCar carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src="/images/1.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/images/2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/images/3.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
            </div>
        </div>
    );
}

export default MainCarousel;
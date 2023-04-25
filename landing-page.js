const sliderConteiner= document.getElementById("carouselExampleAutoplaying")

const imagenSlider = [
    {
        images1: "./assets/img/slider1.jpg",
        images2: "./assets/img/slide3-image-1.webp",
        images3: "./assets/img/slide2-image-3.jpeg",
        images4: "./assets/img/slider4.jpg"
    }
]


const renderSlider = (images) => {
    images.forEach(images => {
        const elementSlider = document.createElement("div")
        elementSlider.innerHTML =  `
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="slider1" src=${images.images1} alt="Ropa y Accesorios">
            </div>
            <div class="carousel-item">
                <img class="slider2" src=${images.images2} alt="Electrodomésticos">
            </div> 
            <div class="carousel-item">
            <img class="slider3" src=${images.images3} alt="Consolas y Videojuegos">
            </div> 
            <div class="carousel-item">
            <img class="slider4" src=${images.images4} alt="Muebles y Hogar">
            </div> 
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button> 
        
        ` 
    sliderConteiner.appendChild(elementSlider)
    
    });
}

renderSlider(imagenSlider)
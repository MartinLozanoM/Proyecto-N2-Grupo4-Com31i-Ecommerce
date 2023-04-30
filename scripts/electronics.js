const sliderConteiner = document.getElementById("carouselExampleAutoplaying");

const imagenSlider = [
  {
    images1: "./assets/img/sliderElectronico.jpg",
    images2: "./assets/img/electronica2.jpg",
    images3: "./assets/img/slide2-image-3.jpeg",
    images4: "./assets/img/electronica4.jpeg",
  },
];

const renderSlider = (images) => {
  images.forEach((images) => {
    const elementSlider = document.createElement("div");
    elementSlider.innerHTML = `
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
        
        `;
    sliderConteiner.appendChild(elementSlider);
  });
};

renderSlider(imagenSlider);

//Products

const productsStore = [
  {
    id: 1,
    title: "Bolso Azul",
    price: 109.95,
    description: "Bolso color Azul con 4 bolsillos.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Remera hombre",
    price: 22.3,
    description: "Remera Hombre blanca con mangas negras.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Chaqueta hombre",
    price: 55.99,
    description: "Chaqueta hombre marron invierno.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Termica hombre",
    price: 15.99,
    description: "Termica slim fit.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "Pulsera dragon",
    price: 695,
    description: "Pulsera de plata con cabeza de dragon.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Anillo She",
    price: 168,
    description: "Anillo plata.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "Anillo Princess",
    price: 9.99,
    description: "Anillo de plata con piedra brillosa.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Aros",
    price: 10.99,
    description: "Aros de oro rosa.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "Disco externo",
    price: 64,
    description: "Disco externo compatible con USB 3.0 y USB 2.0.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "Memoria interna",
    price: 109,
    description: "Memoria interna SanDisk SSD plus.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title: "Unidad de Estado Solido",
    price: 109,
    description: "Unidad de estado solido 256GB SSD.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title: "Disco duro externo",
    price: 114,
    description: "Disco duro externo ideal para consolas.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Monitor Acer",
    price: 599,
    description: "Monitor Acer 21 pulgadas Full HD.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title: "Monitor Samsung",
    price: 999.99,
    description: "Monitor Samsung 27 pulgadas Full HD.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "Campera deportiva mujer.",
    price: 56.99,
    description: "Campera Slim Fit morada",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title: "Chaqueta mujer",
    price: 29.95,
    description: "Chaqueta de cuero con capucha.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Sobretodo mujer",
    price: 39.99,
    description: "Sobretodo color azul.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "Remera mujer",
    price: 9.85,
    description: "Remera 100% algodon.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
];
const productsContainer = document.getElementById("products-container");
console.log(productsContainer);
productsContainer.classList.add("d-flex", "flex-wrap");

const products = productsStore.map((product) => {
  return {
    title: product.title,
    description: product.description,
    price: product.price,
    id: product.id,
    image: product.image,
  };
});

console.log({ products });

const renderProducts = (products) => {
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const productElement = document.createElement("div");

    productElement.classList.add("product");
    productElement.classList.add("d-flex");

    productElement.innerHTML = `
            <div class="card" style="width: 18rem; height: 25rem;">
                <img src=${product.image} class="card-img-top image-product" alt=${product.title}>
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="price-price-mobile">$ ${product.price}</p>
                    <button id="button-counter-${product.id}" class="btn btn-primary button-add">Agregar</button>
                </div>
            </div>
        `;
    productsContainer.appendChild(productElement);
    const addButton = document.getElementById(`button-counter-${product.id}`);
    addButton.addEventListener("click", () => {
      addCart(product.id);
      console.log(cart);
    });
  });
};

function getProductsByCategory(category) {
  return productsStore.filter((product) => product.category === category);
}

const electronicsProducts = getProductsByCategory("electronics");

renderProducts(electronicsProducts);

//End-products

// ------- Cart -------

let cart = [];

// ------- Add Products in the cart-Array -------
const addCart = (prodId) => {
  const item = products.find((prod) => prod.id === prodId);
  cart.push(item);
  cartUpdate();
};
// ------- Add Products in the cart-divs -------
const cartContainer = document.getElementById("modal-cart-main");
// ------- Cart Update -------
const cartUpdate = () => {
  cartContainer.innerHTML = "";
  cart.forEach((prod) => {
    const div = document.createElement("div");
    div.classList.add("product-in-cart");
    div.innerHTML = `
      <p>${prod.title}</p>
      <p>Total: <span id="total-product">${prod.cantidad}</span></p>
      <p>Price: $${prod.price}</p>
      <button onclick ="deleteItemFromCart(${prod.id})" type="button" class="btn btn-danger">
      <i class="bi bi-trash-fill"></i>
      </button>
  `;
    cartContainer.appendChild(div);
  });
  counterIconCart.innerText = cart.length;
};

// ------- Delete Product in the cart -------
const deleteItemFromCart = (prodId) => {
  const item = products.find((prod) => prod.id === prodId);
  const index = cart.indexOf(item);
  cart.splice(index, 1);
  cartUpdate();
};
// ------- Delete All Products in the cart -------
const emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", () => {
  cart.length = 0;
  cartUpdate();
});
// ------- Cart Counter -------
const counterIconCart = document.getElementById("cart-icon-counter");

// -------- End Navbar -------

//footer
const containerFooter = document.getElementById("footer-container");

const itemFooter = [
  {
    name: "Martin Lozano Muñoz",
    profileLinkedin:
      "https://www.linkedin.com/in/martin-lozano-mu%C3%B1oz-bbb545235",
    profileGithub: "https://github.com/MartinLozanoM",
  },

  {
    name: "Bernardo Villafañe",
    profileLinkedin: "",
    profileGithub: "https://github.com/Berni011",
  },

  {
    name: "Daniela Artaza Quiroga",
    profileLinkedin:
      "https://www.linkedin.com/in/daniela-artaza-quiroga-403b3a218/",
    profileGithub: "https://github.com/DanielaQuiroga15",
  },

  {
    name: "Andrea Toledo",
    profileLinkedin: "",
    profileGithub: "",
  },

  {
    name: "Agustin Lizarraga",
    profileLinkedin: "",
    profileGithub: "https://github.com/AgustinLizarraga",
  },
];
const renderFooter = (item) => {
  // containerFooter.innerHTML = ""
  item.forEach((item) => {
    const elementitem = document.createElement("div");

    elementitem.classList.add("footer-info-items");

    elementitem.innerHTML = `

        <div class="col-8">
          <p class="footer-info-color">${item.name}</p>
        </div>
        <div class="col-4">
          <a href="${item.profileGithub}" target="_blank">
            <i class="bi bi-github"></i>
          </a>
          <a
            href="${item.profileLinkedin}" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
        `;
    containerFooter.appendChild(elementitem);
  });
};
renderFooter(itemFooter);
//End Footer
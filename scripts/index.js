//Start Slider
const sliderConteiner = document.getElementById("carouselExampleAutoplaying");

const imagenSlider = [
  {
    images1: "./assets/img/RollingStore1.jpg",
    images2: "./assets/img/RollingStore2.jpg",
    images3: "./assets/img/RollingStore3.jpg",
    images4: "./assets/img/RollingStore4.jpg",
    images5: "./assets/img/RollingStore5.jpg",
  },
];

const renderSlider = (images) => {
  images.forEach((images) => {
    const elementSlider = document.createElement("div");
    elementSlider.classList.add("carouselExampleContainer");
    elementSlider.innerHTML = `
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="slider1" src=${images.images1} class="d-block w-60" alt="Presentación">
            </div>
            <div class="carousel-item">
                <img class="slider2" src=${images.images2} class="d-block w-100" alt="Tecnología">
            </div> 
            <div class="carousel-item">
            <img class="slider3" src=${images.images3} class="d-block w-100" alt="Ropa de Mujer">
            </div> 
            <div class="carousel-item">
            <img class="slider4" src=${images.images4} class="d-block w-100" alt="Ropa de Hombre">
            </div> 
            <div class="carousel-item">
            <img class="slider5" src=${images.images5} class="d-block w-100" alt="Joyería y Accesorios">
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
//End Slider

// ------- Cart -------

let cart;

let counterCart = 0;

const dataLS = localStorage.getItem("cart");

const productInCartLS = JSON.parse(dataLS);

if (productInCartLS) {
  cart = productInCartLS;
} else {
  cart = [];
}

window.onload = () => {
  if (dataLS) {
    cart = productInCartLS;
    counterCart = totalQuantity;
    cartUpdate();
    console.log(cart.length);
  }
};

// ------- Add Products in the cart-Array -------
const addCart = (prodId) => {
  const itemIndex = cart.findIndex((item) => item.id === prodId); // Encuentra el índice del producto en el carrito, si existe
  if (itemIndex !== -1) {
    // Si el producto ya está en el carrito, aumenta su cantidad
    cart[itemIndex].quantity += 1;
  } else {
    // Si el producto no está en el carrito, agrega un nuevo objeto de producto con cantidad 1
    const item = products.find((prod) => prod.id === prodId);
    cart.push(item);
  }
  counterCart++;
  cartUpdate();
};
// ------- Add Products in the cart-divs -------
const cartModalContainer = document.getElementById("modal-cart-main");
// ------- Cart Update -------
const cartUpdate = () => {
  cartModalContainer.innerHTML = "";
  cart.forEach((prod) => {
    const div = document.createElement("div");
    div.classList.add("product-in-cart");
    div.innerHTML = `
      <p>${prod.title}</p>
      <p>Quantity: <span id="total-product">${prod.quantity}</span></p>
      <p>Price: $${prod.price}</p>
      <button onclick ="deleteItemFromCart(${prod.id})" type="button" class="btn btn-danger">
      <i class="bi bi-trash-fill"></i>
      </button>
  `;
    cartModalContainer.appendChild(div);
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCounterCart();
};
// ------- Delete Product in the cart -------
const deleteItemFromCart = (prodId) => {
  const item = products.find((prod) => prod.id === prodId);
  const index = cart.indexOf(item);
  cart.splice(index, 1);
  if (item.quantity > 1) {
    counterCart -= item.quantity;
  } else {
    counterCart--;
  }
  cartUpdate();
};
// ------- Delete All Products in the cart -------
const emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", () => {
  localStorage.clear();
  cart = [];
  counterCart = 0;
  cartUpdate();
});
// ------- Cart Counter -------
const counterIconCart = document.getElementById("cart-icon-counter");
const updateCounterCart = () => {
  counterIconCart.textContent = counterCart;
};
const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
console.log(counterCart);
// -------- End Cart -------

// -------- Form -------
const form = document.querySelector('.register-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('mail').value;
  const telephone = document.getElementById('telephone').value;

  const nameRegex = /^[a-zA-Z ]{2,20}$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const telephoneRegex = /^\d{7,14}$/;

  let isValid = true;

  if (!nameRegex.test(name)) {
    document.getElementById('name').insertAdjacentHTML('afterend', '<div class="error-message">Ingrese un nombre válido.</div>');
    isValid = false;
  }

  if (!nameRegex.test(lastName)) {
    document.getElementById('last-name').insertAdjacentHTML('afterend', '<div class="error-message">Ingrese un apellido válido.</div>');
    isValid = false;
  }

  if (!emailRegex.test(email)) {
    document.getElementById('mail').insertAdjacentHTML('afterend', '<div class="error-message">Ingrese un correo electrónico válido.</div>');
    isValid = false;
  }

  if (telephone && !telephoneRegex.test(telephone)) {
    document.getElementById('telephone').insertAdjacentHTML('afterend', '<div class="error-message">Ingrese un número de teléfono válido.</div>');
    isValid = false;
  }

  if (!document.getElementById('cbox1').checked) {
    document.getElementById('cbox1').insertAdjacentHTML('afterend', '<div class="error-message">Debe aceptar los términos y condiciones.</div>');
    isValid = false;
  }

  if (isValid) {
    form.submit();
  }
});

//footer
const containerFooter = document.getElementById("footer-container");

const itemFooter = [
  {
    name: "Martín Lozano Muñoz",
    image: "./assets/img/martin.jpeg",
    profileLinkedin:
      "https://www.linkedin.com/in/martin-lozano-mu%C3%B1oz-bbb545235",
    profileGithub: "https://github.com/MartinLozanoM",
  },

  {
    name: "Bernardo Villafañe",
    image: "./assets/img/bernardo.jpeg",
    profileLinkedin:
      "https://www.linkedin.com/in/bernardo-villafa%C3%B1e-592267272",
    profileGithub: "https://github.com/Berni011",
  },

  {
    name: "Daniela Artaza Quiroga",
    image: "./assets/img/daniela.jpeg",
    profileLinkedin:
      "https://www.linkedin.com/in/daniela-artaza-quiroga-403b3a218/",
    profileGithub: "https://github.com/DanielaQuiroga15",
  },

  {
    name: "Andrea Toledo",
    image: "./assets/img/andrea.jpeg",
    profileLinkedin: "https://www.linkedin.com/in/andreatoledopintor/",
    profileGithub: "https://github.com/andretoledo22",
  },

  {
    name: "Agustín Lizarraga",
    image: "./assets/img/agustin.jpeg",
    profileLinkedin:
      "https://www.linkedin.com/in/agustin-eduardo-lizarraga-1a9278275/",
    profileGithub: "https://github.com/AgustinLizarraga",
  },
];
const renderFooter = (item) => {
  // containerFooter.innerHTML = ""
  item.forEach((item) => {
    const elementitem = document.createElement("div");

    elementitem.classList.add("card-footer");

    elementitem.innerHTML = `
    <img src="${item.image}" alt="${item.name}"> 
    <p class="footer-card-title text-center">${item.name}</p>
    <div class="footer-card-icons">
    <a  href="${item.profileGithub}" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
    </a>
    <a href="${item.profileLinkedin}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
    </svg>
    </a>
    
  </div>
    
        `;

    containerFooter.appendChild(elementitem);
  });
};
renderFooter(itemFooter);
//end Footer

// ------- Navbar -------
// const buttonCounter = document.getElementById("button-counter");
// const cartIconCounter = document.getElementById("cart-icon-counter");
// const modalMainCart = document.getElementById("modal-cart-main");
// const deleteCartButton = document.getElementById("delete-cart-button");

// let counterCart = [];

// buttonCounter.addEventListener("click", () => {
//   counterCart++;
//   cartIconCounter.textContent = counterCart;
//   console.log(counterCart);
// });

// buttonCounter.addEventListener("click", () => {
//   const div = document.createElement("div");
//   div.classList.add("product-in-cart");
//   div.innerHTML = `
//   <p>Product</p>
//   <p>Total:</p>
//   <p>Price:</p>
//   <button id="delete-cart-button" type="button" class="btn btn-danger">
//     <i class="bi bi-trash-fill"></i>
//   </button>
//   `;
//   modalMainCart.appendChild(div);
// });
// -------- End Navbar -------
//Start Slider
const imagenes = [
  "./assets/img/sliderElectronico.jpg",
  "./assets/img/ropahombre.jpg",
  "./assets/img/women.jpg",
  "./assets/img/accesorioslider.png",
];

document.Imagen.src = imagenes[0];

const SliderIzquierdo = document.querySelector(".slider-izquierdo");
const SliderDerecho = document.querySelector(".slider-derecho");
let Contador = 0;

function MoverDerecha() {
  Contador++;
  if (Contador > imagenes.length - 1) {
    Contador = 0;
  }
  document.Imagen.src = imagenes[Contador];
}
let Intervalo = setInterval(MoverDerecha, 2000);

SliderDerecho.addEventListener("click", function () {
  clearInterval(Intervalo);
  MoverDerecha();
  Intervalo = setInterval(MoverDerecha, 2000);
});

function MoverIzquierda() {
  Contador--;
  if (Contador < 0) {
    Contador = imagenes.length - 1;
  }
  document.Imagen.src = imagenes[Contador];
}
SliderIzquierdo.addEventListener("click", function () {
  clearInterval(Intervalo);
  MoverIzquierda();
  Intervalo = setInterval(MoverDerecha, 2000);
});
//End Slider

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

//Start Slider
const imagenes = [
  "./assets/img/Slider1.png",
  "./assets/img/Slider2.png",
  "./assets/img/Slider3.png",
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

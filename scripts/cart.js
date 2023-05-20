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

const products = productsStore.map((product) => {
  return {
    title: product.title,
    description: product.description,
    price: product.price,
    id: product.id,
    image: product.image,
    quantity: 1,
  };
});

console.log({ products });

//End-products

// -------- Cart Page -------
const productInCartLS = JSON.parse(localStorage.getItem("cart"));
const cartContainer = document.querySelector("#cart-container");
const emptyCart = document.querySelector("#empty-cart");
const cartProducts = document.querySelector("#cart-products");
const cartSummary = document.querySelector("#cart-summary");
const emptyCartButton = document.querySelector("#empty-cart-button");
const buyCartButton = document.querySelector("#buy-cart-button");
const totalSummaryCounter = document.getElementById("total-summary-counter");
let deleteButtons = document.querySelectorAll(".cart-delete-product");

function cartPageUpdate() {
  if (productInCartLS && productInCartLS.length > 0) {
    emptyCart.classList.add("disabled");
    cartProducts.classList.remove("disabled");
    cartSummary.classList.remove("disabled");

    cartProducts.innerHTML = "";

    productInCartLS.forEach((product) => {
      const div = document.createElement("div");
      div.classList.add("cart-product");
      div.innerHTML = `
        <img src=${product.image} class="" alt=${product.title} width="50"
        height="50">
        <p>${product.title}</p>
        <p>Quantity: <span id="total-product">${product.quantity}</span></p>
        <p>Price: $${product.price}</p>
        <p>Subtotal: $${product.price * product.quantity}</p>
        <button id="${
          product.id
        }" type="button" class="btn btn-danger cart-delete-product">
        <i class="bi bi-trash-fill"></i>
        </button>
      `;
      cartProducts.appendChild(div);
    });
  } else {
    cartProducts.innerHTML = "";
    emptyCart.classList.remove("disabled");
    cartProducts.classList.add("disabled");
    cartSummary.classList.add("disabled");
  }
  updateDeleteButtons();
  updateTotalSummary();
}

cartPageUpdate();

//Counter total summary
function updateTotalSummary() {
  totalSummaryCounter.innerText = productInCartLS.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

//Delete Buttons Cart page
function updateDeleteButtons() {
  deleteButtons = document.querySelectorAll(".cart-delete-product");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteProductFromCart);
  });
}
function deleteProductFromCart(e) {
  const buttonId = parseInt(e.currentTarget.id);
  const index = productInCartLS.findIndex((product) => product.id === buttonId);
  console.log(productInCartLS);
  productInCartLS.splice(index, 1);
  console.log(productInCartLS);
  cartPageUpdate();
  localStorage.setItem("cart", JSON.stringify(productInCartLS));
}

//Empty Button Cart page

emptyCartButton.addEventListener("click", emptyAllButton);

function emptyAllButton() {
  productInCartLS.length = 0;
  localStorage.setItem("cart", JSON.stringify(productInCartLS));
  cartPageUpdate();
}

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

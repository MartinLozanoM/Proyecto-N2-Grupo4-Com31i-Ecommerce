//Products

const productsStore = [
    
    {
        id: 1,
        title: "Bolso Azul",
        price: 109.95,
        description:
            "Bolso color Azul con 4 bolsillos.",
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
        description:
            "Remera Hombre blanca con mangas negras.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259,
        },
    },
    {
        id: 3,
        title: "Chaqueta hombre",
        price: 55.99,
        description:
            "Chaqueta hombre marron invierno.",
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
        description:
            "Termica slim fit.",
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
        description:
            "Pulsera de plata con cabeza de dragon.",
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
        description:
            "Anillo plata.",
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
        description:
            "Anillo de plata con piedra brillosa.",
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
        description:
            "Aros de oro rosa.",
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
        description:
            "Disco externo compatible con USB 3.0 y USB 2.0.",
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
        description:
            "Memoria interna SanDisk SSD plus.",
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
        description:
            "Unidad de estado solido 256GB SSD.",
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
        description:
            "Disco duro externo ideal para consolas.",
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
        description:
            "Monitor Acer 21 pulgadas Full HD.",
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
        description:
            "Monitor Samsung 27 pulgadas Full HD.",
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
        description:
            "Campera Slim Fit morada",
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
        description:
            "Chaqueta de cuero con capucha.",
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
        description:
            "Sobretodo color azul.",
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
        description:
            "Remera 100% algodon.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        rating: {
            rate: 4.7,
            count: 130,
        },
    },

];

const productsContainer = document.getElementById("products-container");
console.log(productsContainer)
productsContainer.classList.add("d-flex", "flex-wrap")

const products = productsStore.map(product => {
    return {
        title: product.title,
        description: product.description,
        price: product.price,
        id: product.id,
        image: product.image
    }
})

console.log({products})


const renderProducts = (products) => {
    productsContainer.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div"); 

        productElement.classList.add("product"); 
        productElement.classList.add("d-flex")

        productElement.innerHTML = `
            <div class="card" style="width: 18rem; height: 25rem;">
                <img src=${product.image} class="card-img-top image-product" alt=${product.title}>
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="price-price-mobile">$ ${product.price}</p>
                    <a href="La url del producto" class="btn btn-primary button-add">Agregar</a>
                </div>
            </div>
        `;

        productsContainer.appendChild(productElement);
    })
}

renderProducts(products);


//End-products
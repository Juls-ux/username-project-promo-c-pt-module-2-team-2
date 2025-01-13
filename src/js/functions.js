"use strict";

//  QUERY SELECTORS
const productList = document.querySelector(".js_productList");
const button = document.querySelector(".js_button");
const buttonDelet = document.querySelector(".js_buttonDelet");

// ARRAY

let arrayOfProducts = [];

// Event

button.addEventListener("click", (ev) => {
  ev.preventDefault();
  createProduct();
  renderAllProducts(arrayOfProducts);
});

buttonDelet.addEventListener("click", (ev) => {
  removeProductsLocalStorage();
  renderAllProducts(arrayOfProducts);
});

// Functions

function createProduct() {
  const imageUrl = document.getElementById("imageUpload").value;
  const price = document.getElementById("number").value;
  const name = document.getElementById("name").value;

  const product = {
    id: Date.now(),
    imageUrl: imageUrl,
    price: price,
    name: name,
  };

  arrayOfProducts.push(product);
  console.log(arrayOfProducts);
}

function renderOneProduct(objProduct) {
  return `<li class="container">
                <span class="container_erase js_cardsEraser" data-id="${objProduct.id}">X</span>
                <img src="${objProduct.imageUrl} class="container_img" 
                alt="product image ${objProduct.name}"/>
                <p class="container_price">${objProduct.price}</p>
                <p class="container_name">${objProduct.name}</p>
            </li>`;
}

function renderAllProducts(arrayOfProducts) {
  let html = "";
  for (const objProduct of arrayOfProducts) {
    html += renderOneProduct(objProduct);
  }
  productList.innerHTML = html;
  attachClickEventsToEraserCards();
  localStorage.setItem("products", JSON.stringify(arrayOfProducts));
}

function attachClickEventsToEraserCards() {
  const cardsEraser = document.querySelectorAll(".js_cardsEraser");
  /*Añade evento click a cada <span>*/
  for (const eraser of cardsEraser) {
    eraser.addEventListener("click", (ev) => {
      ev.preventDefault();

      /*Coge el atributo nuevo data-id como ancla para coger el objeto del arrayOfProducts y eliminarlo del arrayOfProducts */
      const idProduct = ev.currentTarget.getAttribute("data-id");
      const index = arrayOfProducts.findIndex(
        (prod) => prod.id === parseInt(idProduct)
      );

      /*Si el índice es distinto de -1, significa que el objeto se encontró en el arrayOfProducts y lo eliminamos */
      if (index !== -1) {
        arrayOfProducts.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(arrayOfProducts));
        renderAllProducts(arrayOfProducts);
      }
    });
  }
}

function getProductsLocalstorage() {
  const savedProducts = JSON.parse(localStorage.getItem("products"));

  if (Array.isArray(savedProducts)) {
    arrayOfProducts = savedProducts;
  } else {
    arrayOfProducts = [];
  }

  renderAllProducts(arrayOfProducts);
}

function removeProductsLocalStorage() {
  localStorage.removeItem("products");
  arrayOfProducts = [];
}

// call functions

getProductsLocalstorage();

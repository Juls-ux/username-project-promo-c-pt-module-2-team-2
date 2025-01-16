"use strict";

//  QUERY SELECTORS
const productList = document.querySelector(".js_productList");
const button = document.querySelector(".js_button");
const buttonDelet = document.querySelector(".js_buttonDelet");
const cardImage = document.querySelector(".js_cardImage");


// ARRAY

let arrayOfProducts = [];

// Event

button.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (valiFields()) {
    createProduct();
    renderAllProducts(arrayOfProducts);
  }
});

buttonDelet.addEventListener("click", (ev) => {
  removeProductsLocalStorage();
  renderAllProducts(arrayOfProducts);
});

// Functions

function createProduct() {
  const imageUrl = cardImage.getAttribute("src");
  const price = document.getElementById("number").value;
  const name = document.getElementById("nameProduct").value;
  const number = ProductContainer.getAttribute("data-number");
  const nameSeller = document.getElementById("nameVendor").value;
  const telephone = document.getElementById("phone").value;
  const emailContact = document.getElementById("email").value;

  


  const data = {
    field1: number,
    field2: Date.now(),
    field3: price,
    field4: name,
    field5: nameSeller,
    field6:telephone,
    field7:emailContact,
    photo: imageUrl,
  };

  arrayOfProducts.push(data);
  console.log(arrayOfProducts);
}

function renderOneProduct(objProduct) {
  return `<li class="container">
                <span class="container_erase js_cardsEraser" data-id="${objProduct.field2}">X</span>
                <img src="${objProduct.photo}" class="container_img" 
                alt="product image ${objProduct.field4}"/>
                <p class="container_price">${objProduct.field3}</p>
                <p class="container_name">${objProduct.field4}</p>
            </li>`;
}

function renderAllProducts(arrayOfProducts) {
  let html = "";
  for (const objProduct of arrayOfProducts) {
    html += renderOneProduct(objProduct);
  }
  productList.innerHTML = html;
  attachClickEventsToEraserCards();
  localStorage.setItem("data", JSON.stringify(arrayOfProducts));
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
        (prod) => prod.field2 === parseInt(idProduct)
      );  

      /*Si el índice es distinto de -1, significa que el objeto se encontró en el arrayOfProducts y lo eliminamos */
      if (index !== -1) {
        arrayOfProducts.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(arrayOfProducts));
        renderAllProducts(arrayOfProducts);
      }
    });
  }
}

function getProductsLocalstorage() {
  const savedProducts = JSON.parse(localStorage.getItem("data"));

  if (Array.isArray(savedProducts)) {
    arrayOfProducts = savedProducts;
  } else {
    arrayOfProducts = [];
  }

  renderAllProducts(arrayOfProducts);
}

function removeProductsLocalStorage() {
  localStorage.removeItem("data");
  arrayOfProducts = [];
}

// call functions

getProductsLocalstorage();

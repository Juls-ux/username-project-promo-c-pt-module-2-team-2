"use strict";

//  QUERY SELECTORS
const productList = document.querySelector(".js_productList");

// ARRAY



let product = {
    id: "",
    imageUrl: "",
    price: "",
    name: "",
};

const arrayOfProducts = [];

// Functions


function renderOneProduct(objProduct) {
    return `<li class="container">
                <span class="container_erase js_cardsEraser" data-id="${objProduct.id}">X</span>
                <img src="${objProduct.imageUrl} class="container_img" 
                alt="character image ${objProduct.name}"/>
                <p class="container_price">${objProduct.price}</p>
                <p class="container_name">${objProduct.name}</p>
            </li>`;
  };

  function renderAllProducts(arrayOfProducts) {
    let html = "";
    for(const objProduct of arrayOfProducts){
        html+= renderOneProduct(objProduct);
    }
    productList.innerHTML=html;
    attachClickEventsToEraserCards();
    
};

function attachClickEventsToEraserCards() {
    const cardsEraser = document.querySelectorAll(".js_cardsEraser");
    /*Añade evento click a cada <span>*/
    for (const eraser of cardsEraser) {
      eraser.addEventListener("click", (ev) => {
      ev.preventDefault();
  
  
        /*Coge el atributo nuevo data-id como ancla para coger el objeto del array favorites y eliminarlo del array favorites */
        const idProduct = ev.currentTarget.getAttribute("data-id");
        const index = arrayOfProducts.findIndex((prod) => prod.id === parseInt(idProduct));
  
        /*Si el índice es distinto de -1, significa que el objeto se encontró en el array favorites y lo eliminamos */
        if (index !== -1) {
            arrayOfProducts.splice(index, 1);
            localStorage.setItem("products", JSON.stringify(arrayOfProducts));
            renderAllProducts();
        };
      });
    };
  };

  function getProductsLocalstorage() {
    const savedpProducts = JSON.parse(localStorage.getItem("products"));
  
    if (Array.isArray(savedpProducts)) {
        arrayOfProducts = savedFavorites;
    } else {
        arrayOfProducts = []; 
    };
  
    renderAllProducts();
  };

  function removeProductsLocalStorage() {
    localStorage.removeItem("products");
  }
  
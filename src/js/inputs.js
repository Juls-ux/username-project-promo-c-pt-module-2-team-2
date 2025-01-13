'use strict';

console.log('>> Ready :)');

//    INPUTS PRODUCTO

const inputPrice = document.querySelector('.js_inputPrice');
const inputProduct = document.querySelector('.js_inputProduct');


//     INPUTS VENDEDOR

const sellerName = document.querySelector('.js_inputName');
const sellerEmail = document.querySelector('.js_inputEmail');
const sellerPhone = document.querySelector('.js_inputPhone');

//     BOTONES y LISTA

const addBtn = document.querySelector('.js_button');
const deleteBtn = document.querySelector('.js_buttonDelete');
const prodList = document.querySelector('.js_productList');

//     IMAGEN 

const imageUpload = document.querySelector('#imageUpload');
const imgCard = document.querySelector('.js_targetImage');

//     CARD

const priceCard = document.querySelector('.js_targetPrice');
const nameCard = document.querySelector('.js_targetName');
const emailCard = document.querySelector('.js_iconEmail');


//     EVENTOS Y FUNCIONES 

let productList = [];

const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Obtener el archivo seleccionado
    if (file) {
      const reader = new FileReader();
  
      reader.onload = () => {
        // Cambiar la imagen del contenedor
        imgCard.src = reader.result;
      };
  
      // Leer el archivo como una URL de imagen
      reader.readAsDataURL(file);
    }
};

imageUpload.addEventListener('change', handleImageUpload);

const handleInputPrice = (ev) => {
    const priceValue = inputPrice.value;
    /*priceCard.innerHTML = priceValue + '€';*/
    priceCard.innerHTML = priceValue && !isNaN(priceValue) ? `${priceValue}€` : 'Precio no disponible';
}; 

inputPrice.addEventListener('input', handleInputPrice);

const handleInputProduct = (ev) => {
    const prodValue = inputProduct.value;
    nameCard.innerHTML = inputProduct.value;
}; 

inputProduct.addEventListener('input', handleInputProduct);



const handleDeleteBtn = (ev) => {
    ev.preventDefault();

    prodList = [];
    prodList.innerHTML = '';
    localStorage.removeItem('prodList');
};

deleteBtn.addEventListener('click', handleDeleteBtn)


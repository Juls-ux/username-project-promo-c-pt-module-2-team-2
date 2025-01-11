'use strict';

console.log('>> Ready :)');

//    INPUTS PRODUCTO

const inputPrice = document.querySelector('.js_inputPrice');
const inputProduct = document.querySelector('.js_inputProduct');


//     BOTONES COLORES 

const greenBtn = document.querySelector('.js_green');
const pinkBtn = document.querySelector('.js_pink');
const purpleBtn = document.querySelector('.js_purple');
const orangeBtn = document.querySelector('.js_orange');

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

let prodList = [];

const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Obtener el archivo seleccionado
    if (file) {
      const reader = new FileReader();
  
      reader.onload = () => {
        // Cambiar la imagen del contenedor
        targetImage.src = reader.result;
      };
  
      // Leer el archivo como una URL de imagen
      reader.readAsDataURL(file);
    }
};

imageUpload.addEventListener('change', handleImageUpload);

const handleInputPrice = (ev) => {
    const priceValue = inputPrice.value;

    
}; 

inputPrice.addEventListener('input', handleInputPrice);

const inputProduct = (ev) => {
    const prodValue = inputProduct.value;
}; 

inputProduct.addEventListener('input', handleInputProduct);



// BOTON BORRAR TODOS LOS FAVS DE LA EVALUACION 

const handleDeleteBtn = (ev) => {
    ev.preventDefault();

    prodList = [];
    prodList.innerHTML = '';
    localStorage.removeItem('prodList');
};

deleteBtn.addEventListener('click', handleDeleteBtn)


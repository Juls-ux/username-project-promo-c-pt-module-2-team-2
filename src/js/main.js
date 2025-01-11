'use strict';

//SECCION COLORES

//Variables
const green = document.querySelector('.js_green');
const pink = document.querySelector('.js_pink');
const purple = document.querySelector('.js_purple');
const orange = document.querySelector('.js_orange ');

const ProductContainer = document.querySelector('.js_ProductContainer');
const selectcategoryText= document.querySelector('.js_selectcategory');

//Funciones


const handlerColourChange = (ev) => {
  ProductContainer.classList.remove('container-green', 'container-pink', 'container-purple', 'container-orange');

    const selectedButton = ev.currentTarget;
    if (selectedButton === green) {
        ProductContainer.classList.add('container-green');
    
      } else if (selectedButton === pink) {
        ProductContainer.classList.add('container-pink');
    
      } else if (selectedButton === purple) {
        ProductContainer.classList.add('container-purple');

      } else if (selectedButton === orange) {
        ProductContainer.classList.add('container-orange');
      }

}

//Eventos
green.addEventListener('click', handlerColourChange)
pink.addEventListener('click', handlerColourChange)
purple.addEventListener('click', handlerColourChange);
orange.addEventListener('click', handlerColourChange);


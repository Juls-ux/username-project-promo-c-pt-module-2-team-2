'use strict';



//SECCION COLORES

//Variables
const green = document.querySelector('.js_green');
const pink = document.querySelector('.js_pink');
const purple = document.querySelector('.js_purple');
const orange = document.querySelector('.js_orange ');

const ProductContainer = document.querySelector('.js_ProductContainer ');

//Funciones


const handlerColourChange = (ev) => {
    const selectedButton = ev.currentTarget;
    if (selectedButton === green) {
        ProductContainer.classList.toggle('container-green');
      } else if (selectedButton === pink) {
        ProductContainer.classList.toggle('container-pink');
      } else if (selectedButton === purple) {
        ProductContainer.classList.toggle('container-purple');
      } else if (selectedButton === orange) {
        ProductContainer.classList.toggle('container-orange');
      }

}

//Eventos
green.addEventListener('click', handlerColourChange)
pink.addEventListener('click', handlerColourChange);
purple.addEventListener('click', handlerColourChange);
orange.addEventListener('click', handlerColourChange);


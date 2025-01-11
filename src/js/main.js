'use strict';

//SECCION COLORES

//Variables
const green = document.querySelector('.js_green');
const pink = document.querySelector('.js_pink');
const purple = document.querySelector('.js_purple');
const orange = document.querySelector('.js_orange');

const ProductContainer = document.querySelector('.js_ProductContainer');
const selectcategoryText= document.querySelector('.js_selectcategory');

const categoryText = document.querySelector('.js_categoryText'); // Asegúrate de esta selección

//Objeto de colores
const colors = {
  green: 'container-green',
  pink: 'container-pink',
  purple: 'container-purple',
  orange: 'container-orange',
};


//Funciones

const handlerColourChange = (ev) => {
  
  ProductContainer.classList.remove('container-green', 'container-pink', 'container-purple', 'container-orange');

   const selectedButton = ev.currentTarget;
    if (selectedButton === green) {
     
        ProductContainer.classList.add('container-green');
        categoryText.classList.add('categoryTextGreen');
    
      } else if (selectedButton === pink) {
        ProductContainer.classList.add('container-pink');
        categoryText.classList.add('categoryTextPink');
    
      } else if (selectedButton === purple) {
        ProductContainer.classList.add('container-purple');
        categoryText.classList.add('categoryTextPurple');

      } else if (selectedButton === orange) {
        ProductContainer.classList.add('container-orange');
        categoryText.classList.add('categoryTextOrange');
      }

}


//Eventos
green.addEventListener('click', handlerColourChange);
pink.addEventListener('click', handlerColourChange);
purple.addEventListener('click', handlerColourChange);
orange.addEventListener('click', handlerColourChange);



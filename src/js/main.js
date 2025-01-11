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


//Funciones


const handlerColourChange = (ev) => {
  
  ProductContainer.classList.remove('container-green', 'container-pink', 'container-purple', 'container-orange');

    const selectedButton = ev.currentTarget;
    if (selectedButton === green) {
     
        ProductContainer.classList.add('container-green');
        categoryText.classList.add('categoryTextGreen');
    
      } else if (selectedButton === pink) {
        ProductContainer.classList.add('container-pink');
    
      } else if (selectedButton === purple) {
        ProductContainer.classList.add('container-purple');

      } else if (selectedButton === orange) {
        ProductContainer.classList.add('container-orange');
      }

}

const styleChange = (ev)=> {
  
  categoryText.classList.remove('categoryTextGreen', 'categoryTextPink', 'categoryTextPurple', 'categoryTextOrange');

  const clickedText = ev.currentTarget;

  if (clickedText === green) {
    console.log('Adding categoryTextGreen');
    categoryText.classList.add('categoryTextGreen');
  } else if (clickedText === pink) {
    console.log('Adding categoryTextPink');
    categoryText.classList.add('categoryTextPink');
  } else if (clickedText === purple) {
    categoryText.classList.add('categoryTextPurple');
  } else if (clickedText === orange) {
    categoryText.classList.add('categoryTextOrange');
  }

}

//Eventos
green.addEventListener('click', handlerColourChange);
pink.addEventListener('click', handlerColourChange);
purple.addEventListener('click', handlerColourChange);
orange.addEventListener('click', handlerColourChange);

green.addEventListener('click', styleChange);
pink.addEventListener('click', styleChange);
purple.addEventListener('click', styleChange);
orange.addEventListener('click', styleChange);






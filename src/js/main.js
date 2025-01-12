'use strict';

//SECCION COLORES

//Variables
const colorsUl = document.querySelector('.js_colorsUl');

const green = document.querySelector('.js_green');
const pink = document.querySelector('.js_pink');
const purple = document.querySelector('.js_purple');
const orange = document.querySelector('.js_orange');

const ProductContainer = document.querySelector('.js_ProductContainer');
const selectcategoryText= document.querySelector('.js_selectcategory');

const categoryText = document.querySelector('.js_categoryText'); // Asegúrate de esta selección


//Variable de colores
const colorObj = {
    color:"#90D10B",
    category: "Muebles",
};


//Funciones

colorsUl.innerHTML = `
  <li class="js_colorLi colorLi">
    <button class="colorPalette" style="background-color: ${colorObj.color};"></button>
    <p class="js_categoryText categoryText">${colorObj.category}</p>
  </li>`;



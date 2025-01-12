'use strict';

//SECCION COLORES

//Variables
const colorsUl = document.querySelector('.js_colorsUl');

//const green = document.querySelector('.js_green');
//const pink = document.querySelector('.js_pink');
//const purple = document.querySelector('.js_purple');
//const orange = document.querySelector('.js_orange');

const ProductContainer = document.querySelector('.js_ProductContainer');
const selectcategoryText = document.querySelector('.js_selectcategory');

const categoryText = document.querySelector('.js_categoryText');


//Variable de colores

let allColors = [
    {
        color: "#90D10B",
        category: "Muebles",
        className: "container-green", 
        textClassName: "categoryTextGreen", 
    },
    {
        color: "#EB2A82",
        category: "Ropa",
        className: "container-pink",
        textClassName: "categoryTextPink",
    },
    {
        color: "#8547E8",
        category: "Informática",
        className: "container-purple",
        textClassName: "categoryTextPurple",
    },
    {
        color: "#FC9A7C",
        category: "Otros",
        className: "container-orange",
        textClassName: "categoryTextOrange",
    },

]

//Funciones
const renderOneColour = (colorObj) => {
    const html= `
       <li class="js_colorLi colorLi" data-category="${colorObj.category}">
      <button class="colorPalette" style="background-color: ${colorObj.color};"></button>
      <p class="js_categoryText categoryText">${colorObj.category}</p>
    </li>`;

    return html;
};

const renderAllColors = () => {
    let html = '';
    for (const colorObj of allColors) { 
        html += renderOneColour(colorObj); 
    }
    colorsUl.innerHTML = html; 
}


const addEventListenersToColors = () => {
    const colorLis = document.querySelectorAll('.js_colorLi');
    console.log(colorLis)
    for (const colorLi of colorLis) {
        colorLi.addEventListener('click', handlerColourChange);
    }
};


const handlerColourChange = (ev) => {
    ProductContainer.classList.remove('container-green', 'container-pink', 'container-purple', 'container-orange');
    categoryText.classList.remove('categoryTextGreen', 'categoryTextPink', 'categoryTextPurple', 'categoryTextOrange');

    const selectedLi = ev.currentTarget;
    const category = selectedLi.dataset.category;
    console.log(selectedLi);

    // Aplica las clases según la categoría
    if (category === "Muebles") {
        
        ProductContainer.classList.add('container-green');
        categoryText.classList.add('categoryTextGreen');
        console.log('muebles');

    } else if (category === "Ropa") {
        ProductContainer.classList.add('container-pink');
        categoryText.classList.add('categoryTextPink');

    } else if (category === "Informática") {
        ProductContainer.classList.add('container-purple');
        categoryText.classList.add('categoryTextPurple');

    } else if (category === "Otros") {
        ProductContainer.classList.add('container-orange');
        categoryText.classList.add('categoryTextOrange');
    }
  
  }



//FUNCIONES
renderAllColors();
addEventListenersToColors()

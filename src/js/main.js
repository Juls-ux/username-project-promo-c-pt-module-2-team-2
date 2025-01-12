'use strict';

//SECCION COLORES

//Variables
const colorsUl = document.querySelector('.js_colorsUl');

const green = document.querySelector('.js_green');
const pink = document.querySelector('.js_pink');
const purple = document.querySelector('.js_purple');
const orange = document.querySelector('.js_orange');

const ProductContainer = document.querySelector('.js_ProductContainer');
const selectcategoryText = document.querySelector('.js_selectcategory');

const categoryText = document.querySelector('.js_categoryText');


//Variable de colores

let allColors = [
    {
        color: "#90D10B",
        category: "Muebles",
    },
    {
        color: "#EB2A82",
        category: "Ropa",
    },
    {
        color: "#8547E8",
        category: "Informática",
    },
    {
        color: "#FC9A7C",
        category: "Otros",
    },

]

//Funciones
const renderOneColour = (colorObj) => {
    const html= `
    <li class="js_colorLi colorLi">
      <button class="colorPalette" style="background-color: ${colorObj.color};"></button>
      <p class="js_categoryText categoryText">${colorObj.category}</p>
    </li>`;

    return html;
};

const renderAllColors = () => {
    let html = '';
    for (const colorObj of allColors) { // Usar 'const colorObj' para cada objeto en 'allColors'
        html += renderOneColour(colorObj); // Pasar cada objeto al renderizador
    }
    colorsUl.innerHTML = html; // Actualizar el contenido del UL
}
renderAllColors();

'use strict';

//SECCION COLORES

//Variables
const colorsUl = document.querySelector('.js_colorsUl');

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

    const AllcolorList = document.querySelectorAll('.js_colorLi');
    console.log(AllcolorList)
    for (const colorLi of AllcolorList) {
        colorLi.addEventListener('click', handlerColourChange);
    }
}


const handlerColourChange = (ev) => {
 
    if (!ProductContainer || !categoryText) {
        console.error('No se encontraron elementos necesarios en el DOM.');
        return;
    }

    // Eliminar clases de color anteriores
    ProductContainer.classList.remove('container-green', 'container-pink','container-purple', 'container-orange');
    categoryText.classList.remove('categoryTextGreen','categoryTextPink', 'categoryTextPurple','categoryTextOrange'
    );

    // Obtener la categoría seleccionada
    const selectedLi = ev.currentTarget;
    const category = selectedLi.dataset.category;

    // Buscar el color correspondiente
    const selectedColor = allColors.find((colorObj) => colorObj.category === category);
    if (selectedColor) {
        // Aplicar nuevas clases
        ProductContainer.classList.add(selectedColor.className);
        categoryText.classList.add(selectedColor.textClassName);
    } else {
        console.warn(`Categoría no encontrada: ${category}`);
    }
  
  }

//FUNCIONES
renderAllColors();


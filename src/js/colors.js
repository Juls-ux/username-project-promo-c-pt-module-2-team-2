'use strict';

//SECCION COLORES

//Variables
const colorsUl = document.querySelector('.js_colorsUl');

const ProductContainer = document.querySelector('.js_ProductContainer');
const selectcategoryText = document.querySelector('.js_selectcategory');


//const categoryText = document.querySelectorAll('.js_categoryText');


//Variable de colores

let allColors = [
    {
        color: "#90D10B",
        category: "Muebles",
        className: "container-green", 
        textClassName: "categoryTextGreen",
        number: 1, 
    },
    {
        color: "#EB2A82",
        category: "Ropa",
        className: "container-pink",
        textClassName: "categoryTextPink",
        number: 2,
    },
    {
        color: "#8547E8",
        category: "Informática",
        className: "container-purple",
        textClassName: "categoryTextPurple",
        number: 3,
    },
    {
        color: "#FC9A7C",
        category: "Otros",
        className: "container-orange",
        textClassName: "categoryTextOrange",
        number: 4,
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

    const AllCategoryList =document.querySelectorAll('.js_categoryText');
    console.log(AllCategoryList)
    for (const CategoryList of AllCategoryList) {
        CategoryList.addEventListener('click', handlerColourChange);
    }

}


const handlerColourChange = (ev) => {
    ev.preventDefault();
    
    const arrowDown2 = document.querySelector(".js_form_arrow2");
    
    const inputForm2 = document.querySelector(".js_form2");
    

    // Eliminar clases de color anteriores
    ProductContainer.classList.remove('container-green', 'container-pink','container-purple', 'container-orange');
    
   
   
    const AllCategoryList =document.querySelectorAll('.js_colorLi');
    console.log(AllCategoryList)
    for (const CategoryList of AllCategoryList) {
        CategoryList.classList.remove('categoryTextGreen', 'categoryTextPink','categoryTextPurple', 'categoryTextOrange');
    }


 
    // Obtener la categoría seleccionada
    const selectedLi = ev.currentTarget;
    const category = selectedLi.dataset.category;

    // Buscar el color correspondiente
    
    const selectedColor = allColors.find((eachObj) => eachObj.category === category);
    if (selectedColor) {
        ev.preventDefault();
        // Aplicar nuevas clases
        ProductContainer.classList.add(selectedColor.className);

        ProductContainer.setAttribute("data-number", selectedColor.number);

        selectedLi.classList.add(selectedColor.textClassName);
        
        inputForm2.classList.add("display-2");
        
        arrowDown2.classList.add("arrow-up");
        

    } else {
        console.warn(`Categoría no encontrada: ${category}`);
        
    }
  
  }


//FUNCIONES
renderAllColors();


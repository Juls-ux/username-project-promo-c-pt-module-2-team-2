'use strict';

console.log('>> Ready :)');

//    INPUTS PRODUCTO

const inputPrice = document.querySelector('.js_inputPrice');
const inputProduct = document.querySelector('.js_inputProduct');


//     INPUTS VENDEDOR

const sellerName = document.querySelector('.js_inputName');
const sellerEmail = document.querySelector('.js_inputEmail');
const sellerPhone = document.querySelector('.js_inputPhone');


//     IMAGEN 

const imageUpload = document.querySelector('#imageUpload');
const imgCard = document.querySelector('.js_cardImage');

//     CARD

const priceCard = document.querySelector('.js_cardPrice');
const nameCard = document.querySelector('.js_cardName');
const emailCard = document.querySelector('.js_iconEmail');
const sellerNameCard = document.querySelector('.js_sellerName')


//     EVENTOS Y FUNCIONES 


const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Obtener el archivo seleccionado
    if (file) {
      const reader = new FileReader();
  
      reader.onload = () => {
        // Cambiar la imagen del contenedor
        imgCard.src = reader.result;
      };
  
      // Leer el archivo como una URL de imagen
      reader.readAsDataURL(file);
    }
};

imageUpload.addEventListener('change', handleImageUpload);

const handleInputPrice = (ev) => {
    const priceValue = inputPrice.value.trim();  // Eliminar espacios alrededor del valor
    const numericValue = parseFloat(priceValue); // Convertir el valor a un número flotante
    
    // Verificar si es un número válido
    if (!isNaN(numericValue) && numericValue >= 0) {
        // Formatear el precio con dos decimales
        priceCard.innerHTML = `${numericValue.toFixed(2)}€`;  // Mostrar con 2 decimales
    } else {
        priceCard.innerHTML = 'Precio no disponible';
    }
};


inputPrice.addEventListener('input', handleInputPrice);

const handleInputProduct = (ev) => {
    const prodValue = inputProduct.value;
    nameCard.innerHTML = inputProduct.value;
}; 

inputProduct.addEventListener('input', handleInputProduct);

const handleSellerName = (ev) => {
  const sellerValue = sellerName.value;
  sellerNameCard.innerHTML = sellerName.value;
}; 

<<<<<<< HEAD
inputProduct.addEventListener('input', handleInputProduct);

=======
/*const handleDeleteBtn = (ev) => {
    ev.preventDefault();

    prodList = [];
    prodList.innerHTML = '';
    localStorage.removeItem('prodList');
};

deleteBtn.addEventListener('click', handleDeleteBtn)*/
>>>>>>> f387670d22578f0fcf8853d60471bbb0528b6885


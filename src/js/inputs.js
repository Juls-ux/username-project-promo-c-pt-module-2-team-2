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
        imgCard.src = reader.result;
      };

      reader.readAsDataURL(file);
    }
};

imageUpload.addEventListener('change', handleImageUpload);

const handleInputPrice = (ev) => {
    const priceValue = inputPrice.value.trim();
    const numericValue = parseFloat(priceValue);
    
    // Verificar si es un número válido
    if (!isNaN(numericValue) && numericValue >= 0) {
        priceCard.innerHTML = `${numericValue.toFixed(2)}€`;
    } else {
        priceCard.innerHTML = 'Precio no disponible';
    }
};


inputPrice.addEventListener('input', handleInputPrice);

const handleInputProduct = (ev) => {
    const prodValue = inputProduct.value;
    nameCard.innerHTML = prodValue;
}; 

inputProduct.addEventListener('input', handleInputProduct);

const handleSellerName = (ev) => {
  const sellerValue = sellerName.value;
  sellerNameCard.innerHTML = sellerValue;
}; 

sellerName.addEventListener('input', handleSellerName);

const emailInput = document.querySelector('.js_inputEmail');
const emailPreview = document.querySelector('.js_iconEmail');

const phoneInput = document.querySelector('.js_inputPhone');
const phonePreview = document.querySelector('.js_iconPhone');


const validEmail = validateEmail(emailInput);
const validPhone = validateTelefono(emailPreview); 

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validateTelefono(telefono) {
  const regex = /^\+?[0-9]{7,15}$/;
  return regex.test(telefono);
}


const handleEmail = (ev) => {
  const email = ev.currentTarget.value;
  emailPreview.setAttribute('href', `mailto:${email}`)
};
emailInput.addEventListener('input', handleEmail);

const handlePhone = (ev) => {
  const telefono = ev.currentTarget.value;
  phonePreview.setAttribute('href', `tel:${telefono}`)
};
phoneInput.addEventListener('input', handlePhone);

const buttonReset = document.querySelector(".js_button");

buttonReset.addEventListener("click", (ev) => {
  ev.preventDefault();
  inputPrice.value = '';  
  inputProduct.value = ''; 
  sellerName.value = '';
  sellerEmail.value = '';
  sellerPhone.value = '';
  imgCard.src = '';
});

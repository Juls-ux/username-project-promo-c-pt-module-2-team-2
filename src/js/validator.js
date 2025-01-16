// Función para validar los campos del formulario

function valiFields() {
  //query selectors

  const imageUrl = document.getElementById("imageUpload");
  const price = document.getElementById("number");
  const nameProduct = document.getElementById("nameProduct");
  const nameVendor = document.getElementById("nameVendor");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  if (isEmpty(imageUrl)) {
    document.getElementById("spanImage").focus();
    return false;
  }
  if (!isNumber(price)) {
    price.focus();
    return false;
  }
  if (isEmpty(nameProduct)) {
    nameProduct.focus();
    return false;
  }
  if (isEmpty(nameVendor)) {
    nameVendor.focus();
    return false;
  }
  if (!isEmail(email)) {
    email.focus();
    return false;
  }
  if (!isPhone(phone)) {
    phone.focus();
    return false;
  }
  return true;
}

// Función para saber si el campo esta vacío o relleno

function isEmpty(inputText) {
  const valueStr = inputText.value.trim();

  console.log(inputText.id);
  console.log(valueStr === "");
  return valueStr === "";
}

//Fucion para saber si el valor del campo es numerico o no

function isNumber(inputNumber) {
  if (isEmpty(inputNumber)) {
    return false;
  }
  console.log(inputNumber.id);
  console.log(isNaN(inputNumber.value));
  console.log(!isNaN(inputNumber.value));
  return !isNaN(inputNumber.value);
}

//Función para saber si el valor del campo es correcto a un email

function isEmail(inputEmail) {
  if (isEmpty(inputEmail)) {
    return false;
  }

  const valueEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //los caracteres que debe tener un email para ser válido
  console.log(inputEmail.id);
  console.log(valueEmail.test(inputEmail.value));
  return valueEmail.test(inputEmail.value);
}

//Función para saber si el campo relleno es numérico

function isPhone(inputPhone) {
  if (!isNumber(inputPhone)) {
    return false;
  }

  const valuePhone = /^\d{9}$/; //el número debe tener 9 dígitos si no es inválido
  console.log(inputPhone.id);
  console.log(inputPhone.value);
  return valuePhone.test(inputPhone.value);
}

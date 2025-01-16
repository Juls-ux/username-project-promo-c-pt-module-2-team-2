function isEmpty(inputText) {
  const valueStr = inputText.value.trim();

  console.log(inputText.id);
  console.log(valueStr === "");
  return valueStr === "";
}

function valiFields() {
  const imageUrl = document.getElementById("imageUpload");
  const price = document.getElementById("number");
  const nameProduct = document.getElementById("nameProduct");
  const nameVendor = document.getElementById("nameVendor");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  if (isEmpty(imageUrl)) {
    imageUrl.focus();
    return false;
  }
  if (isEmpty(price)) {
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
  if (isEmpty(email)) {
    email.focus();
    return false;
  }
  if (isEmpty(phone)) {
    phone.focus();
    return false;
  }
}

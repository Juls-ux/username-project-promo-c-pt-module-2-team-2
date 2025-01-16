"use strict";

//  QUERY SELECTORS

const arrowDown1 = document.querySelector(".js_form_arrow1");
const arrowDown2 = document.querySelector(".js_form_arrow2");
const inputForm1 = document.querySelector(".js_form1");
const inputForm2 = document.querySelector(".js_form2");

//EVENT

arrowDown1.addEventListener("click", (ev) => {
  inputForm1.classList.toggle("display");
  arrowDown1.classList.toggle("arrow-up");
});

arrowDown2.addEventListener("click", (ev) => {
  inputForm2.classList.toggle("display");
  arrowDown2.classList.toggle("arrow-up");
  console.log(inputForm2);
});

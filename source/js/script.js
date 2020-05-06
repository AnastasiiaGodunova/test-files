"use strict";

let login = document.querySelector(".main-nav__login");
let popup = document.querySelector(".modal__login-form");
let close = document.querySelector(".modal__close");
let overlay = document.querySelector(".overlay");
let navToggle = document.querySelector(".main-nav__toggle");
let navList = document.querySelector(".main-nav__list");
let navLogin = document.querySelector(".main-nav__login");
let servicesItem = document.querySelectorAll(".services__item");

navToggle.addEventListener("click", function() {
  if (navToggle.classList.contains("main-nav__toggle--open")) {
      navToggle.classList.remove("main-nav__toggle--open");
      navToggle.classList.add("main-nav__toggle--close");
      navList.style.display = "block";
      navLogin.style.display = "block";
  } else {
      navToggle.classList.add("main-nav__toggle--open");
      navToggle.classList.remove("main-nav__toggle--close");
      navList.style.display = "none";
      navLogin.style.display = "none";
  }
});

login.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
  overlay.classList.add("overlay--show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("modal--show");
    overlay.classList.remove("overlay--show");
  }
});

for (let i = 0; i < servicesItem.length; i++) {
  servicesItem[i].addEventListener("click", function() {
    if (this.classList.contains("services__item--close")) {
        this.classList.remove("services__item--close");
        this.classList.add("services__item--open");
    } else {
        this.classList.remove("services__item--open");
        this.classList.add("services__item--close");
      }
  })
}

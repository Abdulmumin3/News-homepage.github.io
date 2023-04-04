let btnMobileNav = document.querySelector(".btn-nav-mobile");
let headerEl = document.querySelector(".nav-header");
let body = document.querySelector("body");

function toggleBlur() {
  document.body.classList.toggle("blur");
}

btnMobileNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  //   toggleBlur();
});

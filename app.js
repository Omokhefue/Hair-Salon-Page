const sideNav = document.querySelector("#sideNav");
const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("[data-menu]");

menuBtn.addEventListener("click", () => {
  if (sideNav.classList.contains("active")) {
      sideNav.classList.remove("active");
    menu.src = "/Barber_Shop_img/menu.png";
      
  } else {
    sideNav.classList.add("active");
    menu.src = "/Barber_Shop_img/close.png";
  }
});

import initRouter from "@vipranaraya14/view-router";

const menuBtn = document.querySelector("header .menu-btn");
const navBar = document.querySelector("nav");

const handleWindowLoadEvent = () => {
  const showView = initRouter("views-container");

  showView();
};

const showNavBar = () => {
  navBar.classList.add("open");
};

const hideNavBar = (event) => {
  if (event.target !== event.currentTarget) return;

  navBar.classList.remove("open");
};

window.addEventListener("load", handleWindowLoadEvent);

menuBtn.addEventListener("click", showNavBar);
navBar.addEventListener("click", hideNavBar);
window.addEventListener("hashchange", hideNavBar);

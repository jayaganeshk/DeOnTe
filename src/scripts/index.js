import initRouter from "@vipranaraya14/view-router";

const menuBtn = document.querySelector("header .menu-btn");
const navBar = document.querySelector("nav");
const contactForm = document.getElementById("contact-form");

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

const handleContactFormSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const body = new URLSearchParams(formData).toString();

  fetch("https://slhzfd2oof.execute-api.ap-south-1.amazonaws.com/dev/", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

window.addEventListener("load", handleWindowLoadEvent);

menuBtn.addEventListener("click", showNavBar);
navBar.addEventListener("click", hideNavBar);
window.addEventListener("hashchange", hideNavBar);

contactForm.addEventListener("submit", handleContactFormSubmit);

import initRouter from "@vipranaraya14/view-router";

const menuBtn = document.querySelector("header .menu-btn");
const navBar = document.querySelector("nav");
const contactForm = document.querySelector(".contact-form form");
const formStatus = document.querySelector(".contact-form .form-status");

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

const setFormStatus = (status) => {
  const statusMsgs = [...formStatus.querySelectorAll("*")];

  statusMsgs.forEach((statusMsg) => (statusMsg.style.display = "none"));

  if (!status) return;

  formStatus.querySelector(`.${status}`).style.display = "inline";

  setTimeout(setFormStatus, 8000);
};

const handleContactFormSubmit = (e) => {
  e.preventDefault();
  setFormStatus("inprogress");

  const form = e.target;
  const formData = new FormData(form);

  const api = "https://slhzfd2oof.execute-api.ap-south-1.amazonaws.com/dev/";
  const body = JSON.stringify(Object.fromEntries(formData));

  fetch(api, { method: "POST", body })
    .then((response) => response.json())
    .then(() => {
      setFormStatus("success");
      form.reset();
    })
    .catch((error) => {
      console.error("Contact Form Error:", error);
      setFormStatus("error");
    });
};

window.addEventListener("load", handleWindowLoadEvent);

menuBtn.addEventListener("click", showNavBar);
navBar.addEventListener("click", hideNavBar);
window.addEventListener("hashchange", hideNavBar);

contactForm.addEventListener("submit", handleContactFormSubmit);

import initRouter from "@vipranaraya14/view-router";

const handleWindowLoadEvent = () => {
  const showView = initRouter("views-container");

  showView();
};

window.addEventListener("load", handleWindowLoadEvent);

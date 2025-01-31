window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");

  if (window.scrollY >= 200) {
    navbar.classList.add("scrolled");
    navbar.classList.replace("container", "container-fluid");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.replace("container-fluid", "container");
  }
});

window.addEventListener("scroll", function () {
  const navbarr = document.querySelector("nav");

  if (window.scrollY >= 500) {
    navbarr.classList.add("px-md-5");
  } else {
    navbarr.classList.remove("px-md-0");
  }
});

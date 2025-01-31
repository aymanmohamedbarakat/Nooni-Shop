window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");

    if (window.scrollY >= 500) {
      navbar.classList.add("scrolled");
      navbar.classList.remove("container");
      navbar.classList.add("container-fluid");
      navbarr.classList.add("container");
    } else {
      navbar.classList.remove("scrolled");
      navbar.classList.remove("container-fluid");
      navbar.classList.add("container");
    }
  });

  window.addEventListener("scroll", function () {
    const navbarr = document.querySelector("nav");

    if (window.scrollY >= 500) {
      navbarr.classList.add("px-5");
    } else {
      navbarr.classList.remove("px-0");
    }
  });
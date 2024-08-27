let headerElement;
let titleElement;
let landingElement;
let headerDecorative;

window.addEventListener(
  "load",
  () => {
    headerElement = document.querySelector(".header");
    titleElement = document.querySelector(".title");
    landingElement = document.querySelector(".landing-animation");
    headerDecorative = document.querySelector(".header-decorative");

    createObserver();
  },
  false
);

const createObserver = () => {
  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0,
  });

  observer.observe(landingElement);
};

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      headerElement.classList.remove("fixed");
      titleElement.classList.add("fixed");
      headerDecorative.classList.remove("scroll-down-animation");
    } else {
      headerElement.classList.add("fixed");
      titleElement.classList.remove("fixed");
      headerDecorative.classList.add("scroll-down-animation");
    }
  });
};

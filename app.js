const loader = document.querySelector(".loader");
const loaderProgress = document.querySelector(".loader-progress");

window.onload = () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 5000);
  window.scrollTo(0, 0);
}

const logoRotation = document.querySelector("#logo");
const translateCitation = document.querySelector(".citation-scroll-txt");

window.onscroll = () => {
  let posRotation = window.scrollY / 10;
  logoRotation.style.transform = `rotate(${posRotation}deg)`;
  let posCitation = window.scrollY * 2.5 - (window.innerWidth + 2250);
  translateCitation.style.left = `${-posCitation}px`;
};

// elem.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`;

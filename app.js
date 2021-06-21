const loader = document.querySelector(".loader");

window.onload = () => {
  setTimeout(() => {
    loader.style.display = "none";
    window.scrollTo(0, 0);
  }, 5000);
}

const logoRotation = document.querySelector("#logo");
const translateCitation = document.querySelector(".citation-scroll-txt");

/* window.onscroll = () => {
  let posRotation = window.scrollY / 10;
  logoRotation.style.transform = `rotate(${posRotation}deg)`;

  let posCitation = window.scrollY * 2.5 - (window.innerWidth + 2250);
  translateCitation.style.left = `${-posCitation}px`;
}; */

window.onscroll = () => {
  let posRotation = window.scrollY / 10;
  logoRotation.style.transform = `rotate(${posRotation}deg)`;

  let posCitation = window.scrollY * 2.5 - (window.innerWidth + 2250);
  translateCitation.style.left = `${-posCitation}px`;
};

const navLink = document.querySelectorAll(".navbar-menu-link")

navLink .forEach(link => {
    link.addEventListener('click', (e) => {

        // console.log(e.target);
        e.target.classList.add('active');

        for(let i = 0; i < navLink.length; i++ ){
            if(navLink[i] !== e.target){
              navLink[i].classList.remove('active');
            };
        };
        

    });
});

// elem.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`;

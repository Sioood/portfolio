const loader = document.querySelector(".loader");

window.onload = () => {
  setTimeout(() => {
    loader.style.display = "none";
    // window.scrollTo(0, 0);
  });
};

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

//link nav selector

const navLink = document.querySelectorAll(".navbar-menu-link");

navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    // console.log(e.target);
    e.target.classList.add("active-nav");

    for (let i = 0; i < navLink.length; i++) {
      if (navLink[i] !== e.target) {
        navLink[i].classList.remove("active-nav");
      }
    }
  });
});

// elem.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`;

//link nav on scroll

const pages = document.querySelectorAll(".page");
const scrollToTop = document.querySelector(".scrollToTop");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log(entry.target);
        const index = Array.from(pages).indexOf(entry.target);
        navLink.forEach((navLink) => {
          navLink.classList.remove("active-nav");
        });
        navLink[index].classList.add("active-nav");
      }
    });
  },
  {
    threshold: 0,
  }
);

pages.forEach((page) => {
  observer.observe(page);
});

// Clip path on scroll wheel contact

const contact = document.querySelector("#contact");
const circleContact = document.querySelector(".circle-contact");
const contactRotate = document.querySelector(".contact-rotate");

// contact.addEventListener("wheel", onWheel);

contact.addEventListener("wheel", onWheelContact);

document.body.addEventListener("wheel", onWheel);

let scrollValue = 0;

function onWheelContact(e) {
  if (e.deltaY >= 1 && scrollValue >= 0) {
    contact.classList.add("fixed");
  } else if (e.deltaY <= 1) {
  } else if (scrollValue === 0) {
    contact.classList.remove("fixed");
  }
}

function onWheel(e) {
  if (e.deltaY >= 1 && scrollValue >= 0 && scrollValue <= 100) {
    scrollValue++;
    // document.body.classList.add("fixed");
  } else if (e.deltaY <= 1 && scrollValue >= 1) {
    scrollValue--;
    // contact.classList.remove("fixed")
  } else if (scrollValue === 0) {
    contact.classList.remove("fixed");
    document.body.classList.remove("fixed");
  }

  let options = {
    threshold: 0.9,
  };

  const observerContact = new IntersectionObserver(callback, options);

  observerContact.observe(contact);

  /*   function callback() {
    if (contact.isIntersecting) {
      circleContact.style.clipPath = `circle(0px at 50% 50%)`;
      scrollValue = 0;
      let hello = "hello";
      console.log(hello);
    } else {
      console.log(scrollValue);
    }
  } */

  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        document.body.classList.add("fixed");
      } else {
        document.body.classList.remove("fixed");
        circleContact.style.clipPath = `circle(0px at 50% 50%)`;
        scrollValue = 0;
      }
    });
  }

  circleContact.style.clipPath = `circle(${scrollValue * 50}px at 50% 50%)`;
  contactRotate.style.transform = `rotate(${scrollValue * 7.5}deg)`;
}

/* let options = {
  threshold: 0
}

const observerContact = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.isIntersecting);
    }

    else {
      console.log(entry.isIntersecting);
    }

  })
}, options);

observerContact.observe(contact); */

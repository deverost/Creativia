
let pluses = document.getElementsByClassName('circle-plus');
let tabs = document.getElementsByClassName('accordion__tab');

for (let i = 0; i < pluses.length; i++) {
  pluses[i].addEventListener('click', function () {
    this.classList.toggle('opened')
  })
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function () {
    if (i===0 || i === 1) {
      pluses[0].classList.toggle('opened');
      pluses[1].classList.remove('opened');
      pluses[2].classList.remove('opened');
    }
    else if (i===2 || i === 3) {
      pluses[1].classList.toggle('opened');
      pluses[0].classList.remove('opened');
      pluses[2].classList.remove('opened');
    }
    else if (i===4 || i === 5) {
      pluses[2].classList.toggle('opened');
      pluses[0].classList.remove('opened');
      pluses[1].classList.remove('opened');
    }
  });
}

let logos = document.getElementsByClassName("footer__socialLogo");
let logosFiltered = [];

for (let i = 0; i < logos.length; i++) {
  logosFiltered.push(logos.item(i));

  logos[i].addEventListener("mouseover", function() {

    let changeLogos = logosFiltered.filter(logo => logo != logos[i]);

    for (logo of changeLogos) {
      logo.classList.add("footer__socialLogo_hover")
    }

  });

  logos[i].addEventListener("mouseout", function() {
    for (logo of logosFiltered) {
      logo.classList.remove("footer__socialLogo_hover");
    }
  });
}

let hamburger = document.querySelector('.menu-icon ');
let hamburgerMenu = document.querySelector('.hamburger-nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('clicked');
  hamburgerMenu.classList.toggle('close-hamburger');
  hamburgerMenu.classList.toggle('scale-up-ver-center');
});

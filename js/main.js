const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
    });



// slider
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    780: {
        slidesPerView: 2,
        spaceBetween: 20,
    }
}
});


// MAP

let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();


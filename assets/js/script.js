const btnMobile = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navLinks');
    const shadow = document.getElementById('menuShadow');

    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        
        navMenu.classList.toggle('show');
        shadow.classList.toggle('active');
        
      
        const icon = btnMobile.querySelector('i');
        if (navMenu.classList.contains('show')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
    shadow.addEventListener('click', toggleMenu);

    const links = document.querySelectorAll('#navLinks a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            shadow.classList.remove('active');
            btnMobile.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });




/*---------------------- SLIDESHOW  --------------------------------*/
let slideIndex = 1;
let slideTimer;

showSlides(slideIndex);
autoSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetTimer();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetTimer();
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");
  const wrapper = document.querySelector(".slides-wrapper");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  const offset = (slideIndex - 1) * 100;
  wrapper.style.transform = `translateX(-${offset}%)`;

  dots[slideIndex - 1].classList.add("active");
}

function autoSlides() {
  slideTimer = setInterval(() => {
    plusSlides(1);
  }, 6000); // 6 segundos
}

function resetTimer() {
  clearInterval(slideTimer);
  autoSlides();
}


/*------------------- CARROSEL ----------------*/

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let index = Math.floor(items.length / 2);

function updateCarousel() {
  items.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) {
      item.classList.add('active');
    }
  });

  const itemWidth = items[0].offsetWidth;
  
  const offset = (index - 1) * itemWidth; 
  
  track.style.transform = `translateX(-${offset}px)`;
}

window.addEventListener('resize', updateCarousel);

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (index < items.length - 1) {
    index++;
    updateCarousel();
  }
});

updateCarousel();

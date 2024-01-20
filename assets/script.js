const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

// ** Constant ** //
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

// ** Variable ** //
let currentSlideIndex = 0; // La slide initiale est la première du tableau "slides" //

// ** Function ** //
function updateSlide() {
  const currentSlide = slides[currentSlideIndex]; // je crée une constant qui contient la slide actuelle //
  document.querySelector('.banner-img').src = `./assets/images/slideshow/${currentSlide.image}`; // je change l'image a l'interieur de la balise img //
  document.querySelector('#banner p').innerHTML = `${currentSlide.tagLine}`; // je change le texte a l'interieur de la balise p //
}

function updateDots() {
  const dots = document.querySelectorAll('.dot'); // je crée une constante qui contient tous les dots //
  dots.forEach((dot, index) => {  // je fais une boucle sur tous les dots //
    dot.classList.remove('dot_selected'); // je retire la classe "dot_selected" sur tous les dots //
    if (index === currentSlideIndex) { // si l'index du dot est égal a l'index de la slide actuelle //
      dot.classList.add('dot_selected'); // j'ajoute la classe "dot_selected" sur le dot //
    }
  });
}

// ** Event ** //
arrowLeft.addEventListener('click', () => { // quand je clique sur la flèche de gauche //
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // je change l'index de la slide actuelle vers la gauche le modulo permet de revenir a la dernière slide quand on est sur la première //
  updateSlide(); // j'update la slide //
  updateDots(); // j'update les dots //
});

arrowRight.addEventListener('click', () => { // quand je clique sur la flèche de droite //
  currentSlideIndex = (currentSlideIndex + 1) % slides.length; // je change l'index de la slide actuelle vers la droite (slide suivante) //
  updateSlide(); // j'update la slide //
  updateDots();  // j'update les dots //
});

// ** Initialisation ** //
slides.forEach((_, index) => { // je fais une boucle sur toutes les slides //
  const dot = document.createElement('div'); // je crée un dot //
  dot.classList.add('dot'); // je lui ajoute la classe "dot" //
  if (index === 0) { // si l'index du dot est égal a l'index de la slide actuelle //
    dot.classList.add('dot_selected'); // j'ajoute la classe "dot_selected" sur le dot //
  }  
  dotsContainer.appendChild(dot); // j'ajoute le dot dans le container des dots //
}); 
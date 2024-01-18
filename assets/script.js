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


let currentSlideIndex = 0; // La slide initiale est la première du tableau "slides" //

function updateDots() { // Fonction qui met a jour l'affichage des points en fonction du "dot" sélectionné

  document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('dot_selected'));   // Réinitialiser la classe 'dot_selected' pour tous les points // 

  // Cherche si le "dot_selected" est ajouté à un "dot" précédent avec l'opérateur "?."  Puis le retire, pour le rajouter au "dot" actuel que j'ai sélectionné // 
  document.querySelector('.dot_selected')?.classList.remove('dot_selected') || document.querySelectorAll('.dot')[currentSlideIndex]?.classList.add('dot_selected');

  const currentSlide = slides[currentSlideIndex];   // Mettre à jour l'image et le texte associé au slide du tableau actuel //

  document.querySelector('.banner-img').src = `./assets/images/slideshow/${currentSlide.image}`; // Je crée un chemin pour aller chercher l'image dans le dossier "slideshow" //

  document.querySelector('#banner p').innerHTML = `${currentSlide.tagLine}`; // Mettre à jour le texte de la balise <p> //
}

arrowLeft.addEventListener('click', () => { // Ajout  du clic sur la flèche gauche //

  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;   // Mettre à jour l'index de la slide en fonction de la slide précédente // 
  updateDots();
});

arrowRight.addEventListener('click', () => { // Ajout du clic sur la flèche droite //
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateDots();
});


// Création des "dots" en fonction du nombre de slides //
slides.forEach((_, index) => {
  const dot = document.createElement('div'); // Création d'un élément HTML "div" //
  dot.classList.add('dot', index === 0 && 'dot_selected'); // Ajout de la classe "dot" à l'élément HTML "div" //
  dotsContainer.appendChild(dot);  // J'ajoute "dot" dans mon dotsContainer //

  dot.addEventListener('click', () => {   // Gestion du clic sur les dots //
    currentSlideIndex = index; // Je met a jour l'index de la slide en fonction du dot cliqué //
    updateDots();
  });
});

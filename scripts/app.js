// Gestion du carrousel de témoignages
let index = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.left');
const nextButton = document.querySelector('.right');

function changeSlide() {
  slides.forEach((slide, i) => {
    slide.classList.add('hidden');
    if (i === index) {
      slide.classList.remove('hidden');
    }
  });
}

prevButton.addEventListener('click', () => {
  index = (index === 0) ? slides.length - 1 : index - 1;
  changeSlide();
});

nextButton.addEventListener('click', () => {
  index = (index === slides.length - 1) ? 0 : index + 1;
  changeSlide();
});

changeSlide(); // Initial display


function toggleFaq(id) {
  const faq = document.getElementById(id);
  faq.classList.toggle('hidden');
}

document.getElementById('routine-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const theme = document.getElementById('theme-select').value;
  if (theme) {
  alert(`Votre routine personnalisée pour le thème "${theme}" est en cours de préparation.`);
  // Ici, vous pouvez ajouter le code pour envoyer le formulaire ou afficher la routine
  personnalisée
  } else {
  alert('Veuillez sélectionner un thème pour votre routine.');
  }
});

document.getElementById('ebook-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email-input');
  const email = emailInput.value.trim();
  if (validateEmail(email)) {
  alert(`Merci ! Un lien pour télécharger l'e-book a été envoyé à ${email}.`);
  // Ici, vous pouvez ajouter le code pour envoyer le formulaire ou fournir le lien de
  téléchargement
  emailInput.value = ''; // Réinitialiser le champ e-mail
  } else {
  alert('Veuillez entrer une adresse e-mail valide.');
  }
  });
  function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

document.querySelectorAll('.faq-button').forEach(button => {
  button.addEventListener('click', () => {
  const answer = button.nextElementSibling;
  const icon = button.querySelector('span:last-child');
  answer.classList.toggle('hidden');
  icon.classList.toggle('rotate-45');
  });
});

function toggleFaq(id) {
  const faq = document.getElementById(id);
  faq.classList.toggle('hidden');
}
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.querySelector('.btn-container');
const audio = document.getElementById('audio');
const form = document.getElementById('extraForm');
const card = document.querySelector('.card');


function moveNoButton() {
  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}


setInterval(moveNoButton, 700);

// Click en botón SÍ
yesBtn.addEventListener('click', () => {
  audio.play(); // Reproducir música

  // Animar botón sí
  yesBtn.classList.add('bounce');
  setTimeout(() => {
    yesBtn.classList.remove('bounce');
  }, 600);

  alert('Sabía que ibas a aceptar, no te arrepentirás 👌😁.');

  form.style.display = 'block';        // Mostrar formulario
  container.style.display = 'none';    // Ocultar botones
});

// Envío del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const date = form.date.value;
  const place = form.place.value;
  const comments = form.comments.value;

  const message = `¡Hola! 😊\n\nCITA ACEPTADA! 😍 .  MIS RESPUESTAS :\n📅 Fecha: ${date}\n📍 Lugar: ${place}\n💬 Comentario: ${comments}`;

  const phoneNumber = '51995204159'; 

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');

});


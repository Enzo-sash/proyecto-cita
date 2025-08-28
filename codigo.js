const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.querySelector('.btn-container');
const audio = document.getElementById('audio');
const form = document.getElementById('extraForm');
const submitBtn = form.querySelector('button');
const card = document.querySelector('.card');

// Deshabilitar botón enviar al inicio
submitBtn.disabled = true;

// ✅ Función para mover el botón NO
function moveNoButton() {
  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
}

// Mantener movimiento del botón NO
setInterval(moveNoButton, 700);

// ✅ Evento click en botón SÍ
yesBtn.addEventListener('click', () => {
  audio.play();
  yesBtn.classList.add('bounce');
  setTimeout(() => yesBtn.classList.remove('bounce'), 600);

  alert('Sabía que ibas a aceptar, no te arrepentirás 👌😁.');

  document.getElementById('question').style.display = 'none';
  form.style.display = 'block';
  container.style.display = 'none';
});

// ✅ Validación dinámica de los campos
function checkFormFields() {
  const date = form.date.value.trim();
  const place = form.place.value.trim();
  const comments = form.comments.value.trim();

  // Actualizar bordes dinámicamente
  form.date.style.border = date ? "1px solid #ccc" : form.date.style.border;
  form.place.style.border = place ? "1px solid #ccc" : form.place.style.border;

  // Habilitar/deshabilitar botón
  const allFilled = date && place && comments;
  submitBtn.disabled = !allFilled;
  submitBtn.style.backgroundColor = allFilled ? '#000' : '#555';
  submitBtn.style.cursor = allFilled ? 'pointer' : 'not-allowed';
}

// Escuchar cambios en los inputs
['date', 'place', 'comments'].forEach(field =>
  form[field].addEventListener('input', checkFormFields)
);

// ✅ Validación y envío del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const date = form.date.value.trim();
  const place = form.place.value.trim();
  const comments = form.comments.value.trim();

  if (!date || !place) {
    if (!date) form.date.style.border = "2px solid red";
    if (!place) form.place.style.border = "2px solid red";
    alert('Por favor, completa los campos obligatorios: Fecha y Lugar.');
    return;
  }

  // Enviar mensaje por WhatsApp
  const message = `¡Hola! 😊\n\nCITA ACEPTADA! 😍 .  MIS RESPUESTAS :\n📅 Fecha: ${date}\n📍 Lugar: ${place}\n💬 Comentario: ${comments}`;
  const phoneNumber = '51995204159';
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');

  alert('¡Gracias por responder! 😍');
});

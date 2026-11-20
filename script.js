// 1. Inicializar Tooltips de Bootstrap para los iconos de contacto
document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// 2. Efecto de Escritura Futurista en el Subtítulo
const typewriterElement = document.querySelector('.cyber-typewriter');
if (typewriterElement) {
  const originalText = typewriterElement.textContent;
  typewriterElement.textContent = '';
  let i = 0;

  function typeEffect() {
    if (i < originalText.length) {
      typewriterElement.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeEffect, 45);
    }
  }

  setTimeout(typeEffect, 300);
}

// 3. Efecto de iluminación interactiva en las tarjetas al mover el mouse
document.querySelectorAll('.cyber-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(168, 85, 247, 0.25) 0%, rgba(22, 12, 38, 0.75) 60%)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});
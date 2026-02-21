// ===== FONCTION COMMANDE WHATSAPP =====
function orderWhatsApp(product, price) {
  const message = `Bonjour, je souhaite commander le produit "${product}" au prix de ${price} FCFA.`;
  const url = `https://wa.me/221770363388?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// ===== NAVBAR MOBILE =====
const nav = document.querySelector('nav ul');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  nav.classList.toggle('show');
});
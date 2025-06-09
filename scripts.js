document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function () {
        alert('Button clicked!');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.projetos .card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá, meu nome é ${nome}. Mensagem: ${mensagem}`;
    const numero = '5519983235064'; // Substitua pelo seu número com DDI e DDD
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.getComputedStyle(toggleButton).display !== 'none') {
        menu.classList.remove('show');
      }
    });
  });
});




document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function() {
        alert('Button clicked!');
    });
});


document.addEventListener('DOMContentLoaded', function() {
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
    const whatsappUrl = `https://api.whatsapp.com/send?phone=seu-numero&text=Nome:%20${encodeURIComponent(nome)}%0AMensagem:%20${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
});
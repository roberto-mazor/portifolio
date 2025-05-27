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
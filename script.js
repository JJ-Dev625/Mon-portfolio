document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('contact-btn');
    const details = document.getElementById('contact-details');

    btn.addEventListener('click', () => {
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
            btn.textContent = 'Masquer les coordonnées';
        } else {
            details.classList.add('hidden');
            btn.textContent = 'Afficher mes coordonnées';
        }
    });
});
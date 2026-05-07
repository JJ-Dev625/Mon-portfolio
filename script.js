document.addEventListener('DOMContentLoaded', () => {
    // --- Code pour le bouton Contact ---
    const btn = document.getElementById('contact-btn');
    const details = document.getElementById('contact-details');

    if (btn && details) {
        btn.addEventListener('click', () => {
            const isHidden = details.classList.toggle('hidden');
            btn.textContent = isHidden ? 'Afficher mes coordonnées' : 'Masquer les coordonnées';
        });
    }

    // --- Code pour l'effet Machine à écrire ---
    const textElement = document.getElementById('typewriter');
    const text = "Transformer vos idées en solutions numériques concrètes.";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            // Vitesse d'écriture (en millisecondes)
            setTimeout(typeWriter, 80); 
        }
    }

    // Lancer l'animation
    typeWriter();
});
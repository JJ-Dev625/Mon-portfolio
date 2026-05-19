document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Gestion du bouton d'affichage des contacts
    const contactBtn = document.getElementById('contact-btn');
    const contactDetails = document.getElementById('contact-details');

    if (contactBtn && contactDetails) {
        contactBtn.addEventListener('click', () => {
            // On vérifie si la div possède la classe hidden
            if (contactDetails.classList.contains('hidden')) {
                contactDetails.classList.remove('hidden');
                contactBtn.textContent = "Masquer mes coordonnées";
            } else {
                contactDetails.classList.add('hidden');
                contactBtn.textContent = "Afficher mes coordonnées";
            }
        });
    }

    // 2. Effet d'écriture automatique (Typewriter) dans le Header
    const typeText = document.getElementById('typewriter');
    if (typeText) {
        const phrases = ["Bienvenue sur mon portfolio", "Développeur Web Junior", "Passionné par la Tech"];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            typeText.textContent = isDeleting 
                ? currentPhrase.substring(0, charIndex--) 
                : currentPhrase.substring(0, charIndex++);

            let speed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentPhrase.length) {
                speed = 2000; // Temps d'arrêt quand la phrase est écrite en entier
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length; // Passe à la phrase suivante
            }
            setTimeout(type, speed);
        }
        type();
    }
});
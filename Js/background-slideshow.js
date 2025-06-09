// Array of background images
const backgrounds = [
    'Backgrounds/background1.webp',
    'Backgrounds/background2.webp',
    'Backgrounds/background3.jpg',
    'Backgrounds/background4.jpg',
    'Backgrounds/background5.jpg',
    'Backgrounds/background6.webp',
];

let currentIndex = 0;
let isTransitioning = false;

function createBackgroundElement() {
    const bg = document.createElement('div');
    bg.className = 'background-slide';
    bg.style.position = 'absolute';
    bg.style.top = '0';
    bg.style.left = '0';
    bg.style.width = '100%';
    bg.style.height = '100%';
    bg.style.backgroundPosition = 'center';
    bg.style.backgroundSize = 'cover';
    bg.style.backgroundRepeat = 'no-repeat';
    bg.style.opacity = '0';
    bg.style.transition = 'opacity 1.5s ease-in-out';
    return bg;
}

function changeBackground() {
    if (isTransitioning) return;
    isTransitioning = true;

    const heroSection = document.querySelector('.hero');
    heroSection.style.position = 'relative';
    heroSection.style.overflow = 'hidden';

    // Create new background element
    const newBg = createBackgroundElement();
    newBg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${backgrounds[currentIndex]}')`;
    heroSection.appendChild(newBg);

    // Fade in new background
    setTimeout(() => {
        newBg.style.opacity = '1';
    }, 50);

    // Remove old background after transition
    setTimeout(() => {
        const oldBg = heroSection.querySelector('.background-slide:first-child');
        if (oldBg) {
            oldBg.remove();
        }
        isTransitioning = false;
    }, 1500);

    currentIndex = (currentIndex + 1) % backgrounds.length;
}

// Initial background
changeBackground();

// Change background every 10 seconds
setInterval(changeBackground, 5000); 
const container = document.getElementById('hearts-container');
const icons = ['♥', '♡'];

for (let i = 0; i < 80; i++) {
    const heart = document.createElement('span');
    heart.className = 'twinkle-heart';
    heart.textContent = icons[Math.floor(Math.random() * icons.length)];
    
    heart.style.left = (Math.random() * 95) + '%';
    heart.style.top = (Math.random() * 98) + '%';
    
    heart.style.fontSize = (Math.random() * 14 + 12) + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
    heart.style.animationDelay = (Math.random() * 3) + 's';

    container.appendChild(heart);
}
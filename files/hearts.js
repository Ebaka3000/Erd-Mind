// hearts.js — анимированные падающие сердечки
(function() {
    const colors = ['#ff69b4', '#e75480', '#ffb6c1', '#ff1493'];
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (2 + Math.random() * 3) + 's';
        heart.style.fontSize = (18 + Math.random() * 22) + 'px';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.innerHTML = '❤';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 500);
})();

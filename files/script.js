document.getElementById('surpriseBtn').addEventListener('click', function() {
    const surprise = document.getElementById('surprise');
    surprise.classList.toggle('hidden');
    // Запуск анимации появления фото
    const photo = document.getElementById('girlPhoto');
    if(photo) {
        photo.classList.remove('animated-fade');
        void photo.offsetWidth; // reflow
        photo.classList.add('animated-fade');
        // Анимация рамки
        photo.classList.add('glow-frame');
        setTimeout(()=>photo.classList.remove('glow-frame'), 2500);
    }
});

// Кнопка "Обнять"
const hugBtn = document.getElementById('hugBtn');
if (hugBtn) {
    hugBtn.addEventListener('click', function() {
        const hugMessage = document.getElementById('hugMessage');
        const hugPhoto = document.getElementById('hugPhoto');
        hugMessage.classList.remove('hidden');
        hugPhoto.classList.remove('hidden');
        hugPhoto.classList.remove('animated-fade');
        void hugPhoto.offsetWidth;
        hugPhoto.classList.add('animated-fade');
        setTimeout(() => {
            hugMessage.classList.add('hidden');
            hugPhoto.classList.add('hidden');
        }, 6900);
    });
}

// Сердечки, вылетающие из сердца при клике
const mainHeart = document.getElementById('mainHeart');
if (mainHeart) {
    mainHeart.addEventListener('click', function(e) {
        for(let i=0;i<7;i++) {
            setTimeout(()=>{
                const heart = document.createElement('div');
                heart.className = 'falling-heart';
                heart.style.left = (mainHeart.getBoundingClientRect().left + 40 + (Math.random()-0.5)*40) + 'px';
                heart.style.top = (mainHeart.getBoundingClientRect().top + 36) + 'px';
                heart.style.position = 'fixed';
                heart.style.fontSize = (18 + Math.random()*18) + 'px';
                heart.style.color = ['#ff69b4','#e75480','#ffb6c1','#ff1493'][Math.floor(Math.random()*4)];
                heart.innerHTML = '❤';
                document.body.appendChild(heart);
                setTimeout(()=>heart.remove(), 2000);
            }, i*100);
        }
    });
}

// Фото "приезжает" снизу
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0) scale(1)';
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.5 });
const girlPhoto = document.getElementById('girlPhoto');
if(girlPhoto) {
    girlPhoto.style.transform = 'translateY(60px) scale(0.8)';
    girlPhoto.style.opacity = '0';
    observer.observe(girlPhoto);
}

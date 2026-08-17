document.addEventListener('DOMContentLoaded', () => {
    // Generate background hearts
    const heartsContainer = document.getElementById('hearts-container');
    const numHearts = 30;
    
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        const size = Math.random() * 15 + 10;
        heart.style.fontSize = `${size}px`;
        heartsContainer.appendChild(heart);
    }

    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const mainContainer = document.getElementById('main-container');
    const successContainer = document.getElementById('success-container');

    const moveBtnNo = () => {
        // Show laughing emoji at button's current position
        const rect = btnNo.getBoundingClientRect();
        const laugh = document.createElement('div');
        laugh.innerHTML = '😂';
        laugh.classList.add('laughing-emoji');
        laugh.style.left = `${rect.left + rect.width / 2 - 20}px`;
        laugh.style.top = `${rect.top - 20}px`;
        document.body.appendChild(laugh);
        
        setTimeout(() => {
            laugh.remove();
        }, 1000);

        // Move the button to a random position
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        const btnWidth = btnNo.offsetWidth;
        const btnHeight = btnNo.offsetHeight;
        
        const maxLeft = windowWidth - btnWidth - 40;
        const maxTop = windowHeight - btnHeight - 40;
        
        const newLeft = Math.max(20, Math.floor(Math.random() * maxLeft));
        const newTop = Math.max(20, Math.floor(Math.random() * maxTop));
        
        btnNo.style.position = 'fixed';
        btnNo.style.left = `${newLeft}px`;
        btnNo.style.top = `${newTop}px`;
    };

    btnNo.addEventListener('click', moveBtnNo);
    btnNo.addEventListener('mouseover', moveBtnNo);

    btnYes.addEventListener('click', () => {
        mainContainer.classList.add('hidden');
        successContainer.classList.remove('hidden');
        
        // Add more celebration hearts
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = ['❤️', '💖', '🎉', '✨'][Math.floor(Math.random() * 4)];
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            const size = Math.random() * 20 + 20;
            heart.style.fontSize = `${size}px`;
            heartsContainer.appendChild(heart);
        }
    });
});

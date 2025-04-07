const swiper = new Swiper('.swiper-container', {
    effect: 'fade', // Define o efeito como fade
    grabCursor: true,
    loop: true,
    fadeEffect: {
        crossFade: true // Garante que apenas uma imagem seja exibida por vez
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
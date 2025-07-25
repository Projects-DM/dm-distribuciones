// Archivo principal de JS para futura interacción

console.log("DM Distribuciones iniciado correctamente");

// Difuminar la imagen de fondo al hacer scroll
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    const scrollY = window.scrollY;
    const fadeOutStart = 0;
    const fadeOutEnd = 300;

    const opacity = 1 - (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    hero.style.opacity = Math.max(opacity, 0);
});

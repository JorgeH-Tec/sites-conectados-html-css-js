function iniciarCarrossel(carrossel) {
    const slides = carrossel.querySelectorAll(".slide");
    const esquerda = carrossel.querySelector(".seta.esquerda");
    const direita = carrossel.querySelector(".seta.direita");
    let index = 0;

    function mostrarSlide(i) {
        slides.forEach(slide => slide.classList.remove("ativo"));
        slides[i].classList.add("ativo");
    }

    esquerda.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        mostrarSlide(index);
    });

    direita.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        mostrarSlide(index);
    });

    mostrarSlide(index);
}

document.querySelectorAll(".carrossel").forEach(carrossel => iniciarCarrossel(carrossel));

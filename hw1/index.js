function updateCardPosition(card){
    const rect = card.getBoundingClientRect();
    const rectCenter = rect.top + (rect.height / 2);

    const rate = Math.abs((rectCenter - (window.innerHeight / 2)) / window.innerHeight);

    const quadraticRate = rate * rate;
    const offset = quadraticRate * -750;

    let opacity = 1.0 - quadraticRate;
    opacity = Math.pow(opacity, 10);

    card.style.transform = `translateX(${offset}px)`;
    card.style.opacity = opacity;
}

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.major-info-card');
    cards.forEach(updateCardPosition);
    
    let frame_calculated = false;
    window.addEventListener('scroll', () => {
        if (frame_calculated) return;

        window.requestAnimationFrame(() => {
        cards.forEach(updateCardPosition);
        frame_calculated = false;
        });
        frame_calculated = true;
    });
});

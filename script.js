let currentDocIndex = 0;
const totalDocs = 8;

function updateCarousel() {
    const track = document.querySelector('.epc-carousel-track');
    const tabs = document.querySelectorAll('.epc-tab');
    
    if (!track) return;

    // Slide the track horizontally
    track.style.transform = `translateX(-${currentDocIndex * 100}%)`;

    // Update active tab styling
    tabs.forEach((tab, index) => {
        if (index === currentDocIndex) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

function switchDoc(index) {
    currentDocIndex = index;
    updateCarousel();
}

function nextDoc() {
    currentDocIndex = (currentDocIndex + 1) % totalDocs;
    updateCarousel();
}

function prevDoc() {
    currentDocIndex = (currentDocIndex - 1 + totalDocs) % totalDocs;
    updateCarousel();
}

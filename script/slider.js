const slides = document.querySelectorAll('.grid-img');
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 4000);

function nextSlide(){
	slides[currentSlide].classList.remove('showing');
	currentSlide++;
	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}
	slides[currentSlide].classList.add('showing');
};
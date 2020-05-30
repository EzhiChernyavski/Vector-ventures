const navToggle = document.querySelector('.nav-toggle');
const linksWrapper = document.querySelector('.links-wrapper');
const backdrop = document.querySelector('.backdrop');
const arrowsMenu = linksWrapper.querySelectorAll('span');

function toggle() {
	if (linksWrapper.classList.contains('open')) {
		navToggle.classList.add('open');
	} else {
		navToggle.classList.remove('open');
	}
	if (linksWrapper.classList.contains('open')) {
		backdrop.classList.add('open');
	} else {
		backdrop.classList.remove('open');
	}
}

navToggle.addEventListener('click', function() {
	linksWrapper.classList.toggle('open');
	toggle();
});


linksWrapper.addEventListener('click', function(event) {
	if (event.target.className == 'backdrop open' || event.target.tagName == 'A') {
		linksWrapper.classList.remove('open');
		navToggle.classList.remove('open');
		backdrop.classList.remove('open');
	};
});


arrowsMenu.forEach((arrowMenu) => {
	let dropMenu = arrowMenu.closest('li').querySelector('.sub-links');
	arrowMenu.onclick = () => {
		arrowMenu.classList.toggle('drop');
		dropMenu.classList.toggle('drop');
	};
});
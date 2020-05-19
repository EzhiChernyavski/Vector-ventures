const navToggle = document.querySelector('.nav-toggle');
const linksWrapper = document.querySelector('.links-wrapper');
const backdrop = document.querySelector('.backdrop');
const linksCol = linksWrapper.querySelectorAll('a');

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

backdrop.addEventListener('click', function() {
	linksWrapper.classList.remove('open');
	navToggle.classList.remove('open');
	backdrop.classList.remove('open');
});

linksCol.forEach((link) => {
	link.addEventListener('click', function() {
		linksWrapper.classList.remove('open');
		navToggle.classList.remove('open');
		backdrop.classList.remove('open');
	})
});

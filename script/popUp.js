const popUp = document.createElement('div');
popUp.className = 'pop-up';
const iframe = document.createElement('iframe');
const footer = document.querySelector('footer');
const linksProjects = document.querySelectorAll('.project a[href*="youtu.be"]');

footer.before(popUp);
popUp.append(iframe);
iframe.style.width = '640px';
iframe.style.height = '360px';

linksProjects.forEach((linkProject) => {
	linkProject.addEventListener('click', function(elem) {
		elem.preventDefault();

		let url = this.getAttribute('href').substring(17);
		iframe.src = 'https://www.youtube.com/embed/' + url;

		popUp.classList.add('open-box');

		if (popUp.classList.contains('open-box')) {
			let backClose = document.createElement('div');
			backClose.className = 'back-close';
			popUp.prepend(backClose);
			let closebutton = document.createElement('div');
			closebutton.className = 'close-button';
			backClose.after(closebutton);
		};
	});

	popUp.addEventListener('click', function(event) {
		if (event.target.className == 'close-button' || event.target.className == 'back-close') {
			popUp.classList.remove('open-box');
			iframe.src = 'https://www.youtube.com/embed/';
		};
	});
});



const sectionArray = document.querySelectorAll('section');
const sectionPos = {};

sectionArray.forEach((section) => {
	sectionPos[section.id] = section.offsetTop - 500;
});


window.onscroll = () => {
	let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	for (id in sectionPos) {
		if (sectionPos[id] <= scrollPosition) {
			document.querySelector('.active').classList.remove('active');
			document.querySelector(`a[href*=${id}]`).classList.add('active');
		}
	}
};

/*------------------------------------------------------------------------------*/
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
	link.onclick = function(ev) {
		ev.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);
		const topOffset = document.querySelector('.navbar').offsetHeight;
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset - 5;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}
});

/*-------------------------------------------------------------------------------------*/
/*const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
	        block: "center", 
	        behavior: "smooth"
        });
    });
};*/

















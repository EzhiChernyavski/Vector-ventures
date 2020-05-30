const sectionArray = document.querySelectorAll('section');
const sectionPos = {};
const elemNav = document.querySelector('a[href*="#"]');

sectionArray.forEach((section) => {
	sectionPos[section.id] = section.offsetTop - 500;
});

window.onscroll = () => {
	let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	for (id in sectionPos) {
		if (sectionPos[id] <= scrollPosition) {
			document.querySelectorAll('.navbar .active').forEach(function(elem) {
				elem.classList.remove('active');
			});
			activeAllParents(document.querySelector(`a[href*=${id}]`));
		}	
	}
};

function activeAllParents(elementA) {
	let parent = elementA.closest('li');

	if (parent) {
		elementA.classList.add('active');
		

		parent = parent.parentElement.closest('li');
		if (parent) activeAllParents(parent.querySelector('a'));
	}
};



const links = document.querySelectorAll('a[href^="#"]');
/*const windowCenter = document.documentElement.clientHeight * 0.5;*/


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

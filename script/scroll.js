(function() {	
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
				document.querySelector('.active').classList.remove('active');
				document.querySelector(`a[href*=${id}]`).classList.add('active');
				/*activeAllParents(document.querySelector(`a[href*=${id}]`));*/
			}	
		}
	};

	function activeAllParents(elementA) {
		let parent = elementA.closest('li');

		if (parent) {
			parent.classList.add('active');
			

			parent = parent.parentElement.closest('li');
			if (parent) activeAllParents(parent.querySelector('a'));
		}
	};





// elemsNav.forEach((elemNav) => {
// 	let parent = elemNav.closest('li');
// 	console.log(parent);
// 	let topParent = parent.closest('li');
// });


// 	const link = childItem.parentElement.parentElement.parentElement.querySelector('a');
// 	const parent = childItem.parentElement.parentElement.parentElement;
// 	const child = parent.children[1].children[0].querySelector('a');
// 	if (sectionPos[id] <= scrollPosition, childItem.classList.contains('active')) {
// 		document.querySelector('.active').classList.remove('active');
// 		link.classList.add('active');
// 		child.classList.add('active');
// 	};


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

}());
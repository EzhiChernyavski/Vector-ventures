let sectionArray = document.querySelectorAll('section');
const sectionPos = {};

sectionArray.forEach((section) => {
	sectionPos[section.id] = section.offsetTop - 500;
});

/*projectArray.forEach((project) => {
	projectPos[project.id] = project.offsetTop - 500;
});

console.log(projectArray);*/

window.onscroll = () => {
	let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	for (id in sectionPos) {
		if (sectionPos[id] <= scrollPosition) {
			document.querySelector('.active').classList.remove('active');
			document.querySelector(`a[href*=${id}]`).classList.add('active');
		}
	}
};




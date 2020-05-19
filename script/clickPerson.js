const persons = document.querySelectorAll('.person');
const backClose = document.querySelector('.back-close');


persons.forEach((person) => {
	let persInf = person.querySelector('.person-info');

	person.addEventListener('click', function() {
		persInf.classList.add('open-box');
	});

	backClose.addEventListener('click', function() {
		persInf.classList.remove('open-box');
	});

	window.addEventListener('scroll', function() {
		if (persInf.classList.contains('open-box')) {
			persInf.classList.remove('open-box');
		}
	});
});
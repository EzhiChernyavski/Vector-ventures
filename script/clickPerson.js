const persons = document.querySelectorAll('.person');


persons.forEach((person) => {
	let persInf = person.querySelector('.person-info');

	person.addEventListener('click', function() {
		persInf.classList.add('open-box');
	});
	
	person.addEventListener('click', function(event) {
		if (event.target.className == 'close-button' || event.target.className == 'back-close') {
			persInf.classList.remove('open-box');
		};
	});
});
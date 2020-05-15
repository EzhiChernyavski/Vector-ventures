const persons = document.querySelectorAll('.person');


persons.forEach((person) => {
	let persInf = person.querySelector('.person-info');
	person.addEventListener('click', function() {
		persInf.classList.toggle('open-box');
	});

	window.addEventListener('scroll', function() {
		if (persInf.classList.contains('open-box')) {
			persInf.classList.remove('open-box');
		}
	})
});
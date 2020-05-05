const persons = document.querySelectorAll('.person');
const personsInfo = document.querySelectorAll('.person-info');



persons.forEach((person) => {
	let persInf = person.querySelector('.person-info');
	person.addEventListener('click', function() {
		persInf.classList.toggle('open-box');
	});


});

/*if (persInf.classList.contains('open-box')) {
			window.onclick = function() {
				persInf.classList.remove('open-box');
			}
		} else {
			persInf.classList.add('open-box');
		}*/
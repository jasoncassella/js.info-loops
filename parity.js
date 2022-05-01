// the following program shows even numbers between 1 and 10.
for (let i = 1; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	}
}

// improve the program so that it also shows odd numbers.
for (let i = 1; i <= 10; i++) {
	if (i % 2 !== 0) {
		console.log(`${i} is odd`);
	} else {
		console.log(`${i} is even`);
	}
}

// improve it again to replace the inital number 1 by a number given by the user.

let button = document.querySelector('button');
button.addEventListener('click', run);

function run() {
	let initialValue = Number(document.querySelector('input').value);
	for (let i = initialValue; i < initialValue + 10; i++) {
		if (i % 2 !== 0) {
			console.log(`${i} is odd`);
		}
		if (i % 2 === 0) {
			console.log(`${i} is even`);
		}
	}
}

let number = 0;

while (number < 2 || number > 9) {
	number = Number(prompt('enter a number'));
}

for (let i = 1; i <= 12; i++) {
	console.log(`${number} * ${i} = ${number * i}`);
}

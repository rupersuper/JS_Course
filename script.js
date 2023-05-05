for (let i = 1; i < 10; i++) {
	console.log(`Наш баланс ${i}$`)
}

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
	.then((res) => res.json())
	.then((data) => console.log(data));

	fetch('https://www.anapioficeandfire.com/api/characters')
	.then((res) => res.json())
	.then((data) => console.log(data));
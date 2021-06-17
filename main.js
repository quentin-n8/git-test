let myVariable= 'Hello';

console.log(myVariable+ ' Dimitri');
console.log(`${myVariable} Dimitri`);

function addition(numberA, numberB){
	return numberA + numberB;
}

console.log(addition(2, 6));

let addition2 = (numberA, numberB) => {
	return numberA + numberB;
}

console.log(addition2(2, 6));

for (let i = 0; i < 10; i++){
	console.log('Hello');
}

const cities= ['New York', 'Montpellier', 'Toulouse'];

cities.forEach((city, index) => {
	console.log(city, index);
});

const cities2= [
	{
		name: 'Lyon',
		hab: 900000,
		pollution0: '5%',
	},
	{
		name: 'Paris',
		hab: 1900000,
		pollution1: '15%',
	}

];

cities2.forEach(city => {
	console.log(city.name);
});

cities2.forEach((city, index) => {
	console.log(city['pollution'+ index]);
});

//alert('Execution du code js');

//console.log(confirm("Confirmez que vous avez plus de 18 ans"));

//console.log(typeof prompt("Entrez votre age"));
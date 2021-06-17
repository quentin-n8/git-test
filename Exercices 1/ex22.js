let tab1=[
	{
		nom:'Philip',
		age:37,
	},
	{
		nom:'Richard',
		age:53,
	}
];

tab1.forEach(element => {
	console.log(`Cette personne s'appelle ${element.nom} et a ${element.age} ans`);
})
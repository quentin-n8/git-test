let personne={
	prenom:'Damien',
	age:27,
}

console.log(personne.age);
personne.age= personne.age=personne.age+1;
console.log(personne.age);
console.log(personne.prenom[0]);

personne.pere= {
	prenom:'Jean',
	age:57,
}

console.log(personne);
personne.pere.age= 60;
console.log(personne.pere);

let {prenom, age, pere}= personne;
console.log(prenom);
console.log(age);

let enfant={
	prenom:'Philip',
	age:12,
}

enfant.pere= {...personne};

console.log(enfant);

delete personne.pere;

console.log(personne);
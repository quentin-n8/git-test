const title= document.createElement('h1');

const body= document.body; //recupère tout le body d'une page html

title.textContent= 'Mon Titre';
title.style.color= 'red';

body.appendChild(title);

const link= document.querySelector('a');

link.addEventListener('click', (event) => {
	
	event.preventDefault();
	event.target.style.color= 'red';
	console.log(event);
});
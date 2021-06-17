const button= document.querySelector('button');
const list= document.getElementById('list');
let numerator= 0;

button.addEventListener('click', (event) => {
	
	let new_line= document.createElement('li');
	new_line.textContent= numerator;
	list.appendChild(new_line);
	numerator++;
});
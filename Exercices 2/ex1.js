const button= document.querySelector('button');
const image= document.getElementById('myImg');

button.addEventListener('click', (event) => {
	
	if(image.style.visibility === 'hidden') {
		image.style.visibility= 'visible';
	}
	else {
		image.style.visibility= 'hidden';
	}
});
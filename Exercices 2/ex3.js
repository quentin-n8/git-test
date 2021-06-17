// let userlist = [
// { id: 1, prenom: "Damien", age: 40, role: "utilisateur" },
// { id: 2, prenom: "Camille", age: 29, role: "administrateur" },
// { id: 3, prenom: "Marie", age: 35, role: "utilisateur" },
// { id: 4, prenom: "Roger", age: 60, role: "utilisateur" },
// ];

mystorage= localStorage;
userlist= JSON.parse(mystorage.getItem('userlist'));

function getMaxId(list) {
	let maxId=list[0].id;
	list.forEach((user) => {
		if(user.id > maxId) {
			maxId= user.id;
		}
	});
	return maxId;
}


function displayList(list) {

	let user_list= document.createElement('ul');
	document.body.appendChild(user_list);

	list.forEach( (user,index) => {
		let user_line= document.createElement('li');
		user_line.textContent= `ID: ${user.id},Prenom: ${user.prenom},Age: ${user.age},Role: ${user.role}`;

		if(user.role === 'utilisateur') {
			user_line.style.color= 'blue';
		}
		else {
			user_line.style.color= 'red';
		}

		user_list.appendChild(user_line);

		user_line.addEventListener('mouseenter', (event) => {
		
			user_line.style.backgroundColor= 'grey';
		});

		user_line.addEventListener('mouseleave', (event) => {
		
			user_line.style.backgroundColor= 'white';
		});

		let user_button= document.createElement('button');
		user_button.textContent= 'Supprimer';
		user_line.appendChild(user_button);

		user_button.addEventListener('click', (event) => {
		
			user_list.removeChild(user_line);
			userlist.splice(index,1);
			mystorage.setItem('userlist',JSON.stringify(userlist));
			document.body.removeChild(user_list);
			displayList(JSON.parse(mystorage.getItem('userlist')));

		});

	});

}

displayList(JSON.parse(mystorage.getItem('userlist')));


let create_button= document.getElementById('form_submit');
let prenom= document.getElementById('input_prenom');
let age= document.getElementById('input_age');
let role= document.getElementById('input_role');

create_button.addEventListener('click', (event) => {
		
	event.preventDefault();
	let user_list= document.querySelector('ul');
	const new_user= { id: getMaxId(JSON.parse(mystorage.getItem('userlist')))+1, prenom: prenom.value, age: age.value, role: role.value};
	userlist.push(new_user);
	mystorage.setItem('userlist',JSON.stringify(userlist));
	document.body.removeChild(user_list);
	displayList(JSON.parse(mystorage.getItem('userlist')));
});

let modif_button= document.getElementById('modif_submit');
let id_modif= document.getElementById('modif_id');
let prenom_modif= document.getElementById('modif_prenom');
let age_modif= document.getElementById('modif_age');
let role_modif= document.getElementById('modif_role');

modif_button.addEventListener('click', (event) => {
		
	event.preventDefault();
	let user_list= document.querySelector('ul');
	userlist.forEach( (user,index) => {
		if(user.id === parseInt(id_modif.value)) {
			user.prenom= prenom_modif.value;
			user.age= age_modif.value;
			user.role= role_modif.value;
		}
	});
	mystorage.setItem('userlist',JSON.stringify(userlist));
	document.body.removeChild(user_list);
	displayList(JSON.parse(mystorage.getItem('userlist')));
});

let button_id= document.getElementById('tri_id');
let button_nom= document.getElementById('tri_nom');
let button_age= document.getElementById('tri_age');

button_id.addEventListener('click', (event) => {
		
	userlist.sort((a,b) => a.id - b.id);
	mystorage.setItem('userlist',JSON.stringify(userlist));
	let user_list= document.querySelector('ul');
	document.body.removeChild(user_list);
	displayList(JSON.parse(mystorage.getItem('userlist')));
});

button_nom.addEventListener('click', (event) => {
		
	userlist.sort((a,b) => a.prenom.localeCompare(b.prenom));
	mystorage.setItem('userlist',JSON.stringify(userlist));
	let user_list= document.querySelector('ul');
	document.body.removeChild(user_list);
	displayList(JSON.parse(mystorage.getItem('userlist')));
});

button_age.addEventListener('click', (event) => {
		
	userlist.sort((a,b) => a.age - b.age);
	mystorage.setItem('userlist',JSON.stringify(userlist));
	let user_list= document.querySelector('ul');
	document.body.removeChild(user_list);
	displayList(JSON.parse(mystorage.getItem('userlist')));
});

let search_input= document.getElementById("recherche");

search_input.addEventListener('input', (event) => {
		
	let search_value= search_input.value;
	let newUserList = JSON.parse(mystorage.getItem('userlist')).filter(
		user => user.age == search_value
		|| user.prenom.includes(search_value)
		|| user.role.includes(search_value)
		|| user.id == search_value
	);
	let user_list= document.querySelector('ul');
	document.body.removeChild(user_list);
	displayList(newUserList);
});

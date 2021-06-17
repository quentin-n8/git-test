const url = "https://www.prevision-meteo.ch/services/json/";

let info;
let current_condition;
let day1;
let day2;
let day3;
let day4;

let submit_button= document.querySelector("form input[type='submit']");

submit_button.addEventListener('click', event => {
	requestApi(event);
});


function requestApi(event) {
	
	event.preventDefault();
	const city = document.querySelector("form input[name='city']");
	console.log(city.value);
	fetch(`${url}${city.value}`).then(response => response.json())
		.then(data => {
			console.log('Success:', data);
			info= data.city_info;
			current_condition= data.current_condition;
			day1= data.fcst_day_1;
			day2= data.fcst_day_2;
			day3= data.fcst_day_3;
			day4= data.fcst_day_4;
			fillDisplay();
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

async function GetData(event) {
	let result= await requestApi(event);
	return new Promise( resolve => {

		setTimeout(() => {
				resolve();
		}, 2000);
	});
}


function fillDisplay() {


	let current_title= document.getElementById('current_title');
	let date_title= document.getElementById('date_title');
	let current_image= document.getElementById('current_image');
	let current_temp= document.getElementById('current_temp');
	let current_wind= document.getElementById('current_wind');
	let current_wether= document.getElementById('current_wether');
	current_title.textContent= `Meteo pour ${info.name}, ${info.country}`;
	date_title.textContent= `Date :${current_condition.date} Heure :${current_condition.hour}`;
	current_image.setAttribute('src',current_condition.icon);
	current_temp.textContent= `${current_condition.tmp}°C`;
	current_wind.textContent= `${current_condition.wnd_spd}km/h, ${current_condition.wnd_dir}`;
	current_wether.textContent= `${current_condition.condition}`;

	let day1_title= document.getElementById('day1_title');
	let day1_image= document.getElementById('day1_image');
	let day1_wether= document.getElementById('day1_wether');
	let day1_min_temp= document.getElementById('day1_min_temp');
	let day1_max_temp= document.getElementById('day1_max_temp');
	day1_title.textContent= `${day1.day_long}, ${day1.date}`;
	day1_image.setAttribute('src',day1.icon);
	day1_wether.textContent= `${day1.condition}`;
	day1_min_temp.textContent= `${day1.tmin}`;
	day1_max_temp.textContent= `${day1.tmax}`;

	let day2_title= document.getElementById('day2_title');
	let day2_image= document.getElementById('day2_image');
	let day2_wether= document.getElementById('day2_wether');
	let day2_min_temp= document.getElementById('day2_min_temp');
	let day2_max_temp= document.getElementById('day2_max_temp');
	day2_title.textContent= `${day2.day_long}, ${day2.date}`;
	day2_image.setAttribute('src',day2.icon);
	day2_wether.textContent= `${day2.condition}`;
	day2_min_temp.textContent= `${day2.tmin}`;
	day2_max_temp.textContent= `${day2.tmax}`;

	let day3_title= document.getElementById('day3_title');
	let day3_image= document.getElementById('day3_image');
	let day3_wether= document.getElementById('day3_wether');
	let day3_min_temp= document.getElementById('day3_min_temp');
	let day3_max_temp= document.getElementById('day3_max_temp');
	day3_title.textContent= `${day3.day_long}, ${day3.date}`;
	day3_image.setAttribute('src',day3.icon);
	day3_wether.textContent= `${day3.condition}`;
	day3_min_temp.textContent= `${day3.tmin}`;
	day3_max_temp.textContent= `${day3.tmax}`;

	let day4_title= document.getElementById('day4_title');
	let day4_image= document.getElementById('day4_image');
	let day4_wether= document.getElementById('day4_wether');
	let day4_min_temp= document.getElementById('day4_min_temp');
	let day4_max_temp= document.getElementById('day4_max_temp');
	day4_title.textContent= `${day4.day_long}, ${day4.date}`;
	day4_image.setAttribute('src',day4.icon);
	day4_wether.textContent= `${day4.condition}`;
	day4_min_temp.textContent= `${day4.tmin}`;
	day4_max_temp.textContent= `${day4.tmax}`;

	for(i = 0; i<24; i++){
		let day1_img= document.getElementById(`day1_${i}_image`);
		let day1_wth= document.getElementById(`day1_${i}_wether`);
		let day2_img= document.getElementById(`day2_${i}_image`);
		let day2_wth= document.getElementById(`day2_${i}_wether`);
		let day3_img= document.getElementById(`day3_${i}_image`);
		let day3_wth= document.getElementById(`day3_${i}_wether`);
		let day4_img= document.getElementById(`day4_${i}_image`);
		let day4_wth= document.getElementById(`day4_${i}_wether`);
		day1_img.setAttribute('src',day1.hourly_data[`${i}H00`].ICON);
		day1_wth.textContent= `${day1.hourly_data[`${i}H00`].CONDITION}`;
		day2_img.setAttribute('src',day2.hourly_data[`${i}H00`].ICON);
		day2_wth.textContent= `${day2.hourly_data[`${i}H00`].CONDITION}`;
		day3_img.setAttribute('src',day3.hourly_data[`${i}H00`].ICON);
		day3_wth.textContent= `${day3.hourly_data[`${i}H00`].CONDITION}`;
		day4_img.setAttribute('src',day4.hourly_data[`${i}H00`].ICON);
		day4_wth.textContent= `${day4.hourly_data[`${i}H00`].CONDITION}`;
	}	
}
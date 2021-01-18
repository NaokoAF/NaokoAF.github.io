const birthdayDate = new Date(2003, 12, 17);
const age = getAge(birthdayDate);

const images = [
	"images/naoko/duckface.png",
	"images/naoko/finger_smile.png",
	"images/naoko/rawr.png"
]

function onLoad(){
	let textObj = document.getElementsByClassName("bio")[0];
	textObj.innerHTML = textObj.innerHTML.replace('%age%', age);

	let characterObj = document.getElementsByClassName("character")[0];
	characterObj.src = getRandomImage();
	
	$(".all").animate({ opacity: 1 }, 500);
}

function getAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
	}
	
    return age;
}

function getRandomImage(){
	let index = Math.floor(Math.random() * images.length);
	return images[index];
}
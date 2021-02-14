const birthdayDate = new Date(2003, 12, 17);
const age = getAge(birthdayDate);

const images = [
	"duckface",
	"finger_smile",
	"rawr"
]

function onLoad(){
	let textObj = document.getElementsByClassName("bio")[0];
	textObj.innerHTML = textObj.innerHTML.replace('%age%', age);

	let characterObj = document.getElementsByClassName("character")[0];
	characterObj.src = getRandomImage();

	document.getElementById("all").className += "Animate";
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
	return "assets/naoko/" + images[index] + ".png";
}
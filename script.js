const birthdayDate = new Date(2003, 12, 17);
const age = getAge(birthdayDate);

function onLoad(){
	let textObj = document.getElementById("bio");
	textObj.innerHTML = textObj.innerHTML.replace('%age%', age);

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
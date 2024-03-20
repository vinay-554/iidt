var main=document.getElementById("main")
var resultColors = [];
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
	var totalValues = 3;
	for (var i = 0; i < 3; i++) {
		var randomNumber = getRandomInt(0, 255);
		resultColors.push(randomNumber);
	}

	return resultColors;
}

function changeColor() {
	getRandomColor();
	var completeColor ="rgb(" +resultColors[0] +"," +resultColors[1] +"," +resultColors[2]+")";
	main.style.setProperty("background-color", completeColor);
	resultColors.splice(0, 3);
}

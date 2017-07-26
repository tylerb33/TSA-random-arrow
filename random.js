console.log ("random.js");

let imgGrab = document.getElementById("myArrow");
let randomNumber = "";

function produceRandomNumber() {
	randomNumber = Math.floor(Math.random()*(100-0+1)+0)
	console.log(randomNumber);
	decideArrow(randomNumber);
};

function decideArrow(number) {
	// console.log ("numberinDecide", number);
	if (number <= 50) {
		imgGrab.innerHTML = "";
		imgGrab.classList = "";
		imgGrab.classList.add("normal");
	} else if (number > 50) {
		imgGrab.innerHTML = "";
		imgGrab.classList = "";
		imgGrab.classList.add("flipped");
	}
}


document.addEventListener("click", produceRandomNumber);
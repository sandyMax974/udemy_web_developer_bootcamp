let number = prompt("Enter your guess here");
const value = 7;


function guess(number){
	if (number < value){
		alert("not enough")
	}
	else if(number > value){
		alert("too high")
	}
	else {
		alert("corretc!")
	}
}

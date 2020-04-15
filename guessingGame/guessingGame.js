const secretNumber = 4;
let guess = Number(prompt("Enter your guess here"));

if (guess === secretNumber){
	alert("You got it right!");
}
else if (guess > secretNumber){
	alert("Too high. Guess again!")
}
else {
	alert("Too low. Guess again!")
}
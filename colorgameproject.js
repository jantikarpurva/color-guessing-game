var numSquares = 6;
var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickIndexColor();
var colorDisplay = document.querySelectorAll("h2");
var msg = document.querySelector("#message");
var changeNavColor = document.querySelector("#nav1");
var reset1 = document.querySelector("#reset"); 
var easy1 = document.querySelector("#easy");
var hard1 = document.querySelector("#hard");
// change content of r g b in h1 
colorDisplay[0].textContent = pickedColor;
// adds color to all square
for(var i = 0; i <squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
}
// adds event listener and compares if the color of square clicked and pickedColor is same
for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor)
		{
			msg.textContent = "correct";
			changeColor(clickedColor); // passing clickedColor as argument
			changeNavColor.style.backgroundColor = clickedColor;
			//after winning change content of new color button to play again?
			reset1.textContent = "play again?";
		}
		else{
			this.style.backgroundColor = "cyan";
			msg.textContent = "try again!!";
		}
	}); 
}
// set reset event for new colors button
reset1.addEventListener("click", function(){
	// generate whole new array
	colors = generateRandomColor(numSquares);
	// again pick new color 
	pickedColor = pickIndexColor();
	// change content of r g b in h1 
	colorDisplay[0].textContent = pickedColor;
	//change colors of square to new colors
	for(var i = 0; i <squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
	// previous game changes your nav1 color so change it back to original color
	changeNavColor.style.backgroundColor = "pink";
	reset1.textContent = "new colors";
	msg.textContent = "hello lets play";
});
// set easy button
easy1.addEventListener("click", function(){
	hard1.classList.remove("buttonchange1");
	easy1.classList.add("buttonchange1");
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	pickedColor = pickIndexColor();
	colorDisplay[0].textContent = pickedColor;
	for(var i = 0; i <squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
		if( i >= 3){
			document.querySelectorAll(".square")[i].style.display = "none";
		}
	}
	changeNavColor.style.backgroundColor = "pink";
});
//set hard button
hard1.addEventListener("click", function(){
	easy1.classList.remove("buttonchange1");
	hard1.classList.add("buttonchange1");
	numSquares = 6;
	colors = generateRandomColor(numSquares);
	pickedColor = pickIndexColor();
	colorDisplay[0].textContent = pickedColor;
	for(var i = 0; i <squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	if( i >= 3){
			document.querySelectorAll(".square")[i].style.display = "block";
		}
	}
	changeNavColor.style.backgroundColor = "pink";
});
// function to change color of all 6 square to pickedColor
function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
// function to pick random color from generated color array every time u refresh 
function pickIndexColor(){
	var random1 = Math.floor(Math.random() * colors.length);
	return colors[random1];
}
// function to generate random color array every time 
function generateRandomColor(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(rgbRandom());  // r g b random value generated is pushed on to the array
	}
	return arr;
}
// function to generate random r g b value for each color every time 
function rgbRandom(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + b + ", " + g + ")";
}

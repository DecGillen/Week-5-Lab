function rock(){
	var num= Math.floor(Math.random() * 3 + 1);
	console.log(num);
	if(num==1){
		document.getElementById("result").innerHTML =("It's a tie, you both chose Rock!")
		var x = document.createElement("IMG");
	x.setAttribute("src", "img/theRock.jpg");
	x.setAttribute("width", "304");
	x.setAttribute("height", "228");
	x.setAttribute("alt", "The Rock");
	document.body.appendChild(x);
	}
	else if (num==2){
		document.getElementById("result").innerHTML =("The computer chose scissors, you win!")
	}
	else if (num==3){
		document.getElementById("result").innerHTML =("The computer chose paper, you lose!")
	}
}
	
function paper(){
	var num= Math.floor(Math.random() * 3 + 1);
	if(num==1){
		document.getElementById("result").innerHTML =("The computer chose Rock, you win!")
	}
	else if (num==2){
		document.getElementById("result").innerHTML =("It's a tie, you both chose Paper!")
	}
	else if (num==3){
		document.getElementById("result").innerHTML =("The computer chose scissors, you lose!")
	}
}
function scissors(){
	var num= Math.floor(Math.random() * 3 + 1);
	if(num==1){
		document.getElementById("result").innerHTML =("The computer chose Rock, you lose!")
	}
	else if (num==2){
		document.getElementById("result").innerHTML =("The computer chose Paper, you win!")
	}
	else if (num==3){
		document.getElementById("result").innerHTML =("It's a tie, you both chose Scissors!")
	}
}
var count = 0;

function update(){
if (count === 3) {
	document.getElementById("controls").style.display = "none";
} else {
	document.getElementById("controls").style.display = "block";
}
}
for (var i=0;i<=3;i++){
function rock(){
	update();
	count++;
	if (count!=3){
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
	console.log(count);
}
	
function paper(){
	update();
	count++;
	if (count!=3){
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
	console.log(count);
	}
function scissors(){
	update();
	count++;
	if (count!=3){
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
	console.log(count);
}
}
<!--99 bottles of beer-->
function sing(){
	for (var i=99;i>0;i--){
		document.getElementById("lyrics").innerHTML +=(i+" bottles of beer on the wall, "+i+" bottles of beer. Take one down and pass it around, "+(i-1)+ " bottles of beer on the wall"+"<br>");
		}
		document.getElementById("lyrics").innerHTML +=("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall");
	}
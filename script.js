<!-- Return the mean and sum of an array of numbers-->




function sum(){
	var numbers= [];
	for(var i=0;i<5;i++){
	numbers[i]=parseInt(prompt("Enter a number:"));
}
	var sumResult=0;
	for (var i=0;i<numbers.length;i++){
		sumResult=sumResult+numbers[i];
	}
	alert("The Sum of these numbers is: "+sumResult);
	var meanResult=sumResult / numbers.length;
	alert("The mean of these numbers is: "+meanResult);
}
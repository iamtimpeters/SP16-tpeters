
console.log("Hello World!");

// #4
function calculator(arg1, action, arg2){
	
	//#6a
	if(arg1 === null || arg2 === null || action === null || arg1 === undefined || arg2 === undefined || action === undefined){
		console.log("INVALID");
	}

	//#6b
	if(typeof(arg1) != "number" || typeof(arg2) != "number"){
		console.log("INVALID");
	}
	
	//#6c
	if(action != "add" && action != "subtract" && action != "multiply" && action != "divide"){
		console.log("INVALID");
	}
	
	//#5
	if(action === "add"){
		return(arg1 + arg2);
	}
	
	if(action === "subtract"){
		return(arg1 - arg2);
	}
	
	if(action === "multiply"){
		return(arg1 * arg2);
	}
	
	if(action === "divide"){
		return(arg1/arg2);
	}
}

//#7
function calcTest(){
	//#7a
	var answer = calculator(2, "add", 2);
	console.log(answer);
	//#7b
	var answer = calculator("a", "add", "0")
	console.log(answer);
	//#7c
	var answer = calculator(10, "divide", 2)
	console.log(answer);
	//#7d
	var answer = calculator(3, "multiply", 3)
	console.log(answer);
}

calcTest()

//#8
/*
var calcArgs = {
	arg1: 2,
	action: "add",
	arg2: 2
}
*/

function objectCalculator(calcArgs){
	if(calcArgs.action === "add"){
		return calcArgs.arg1 + calcArgs.arg2;	
	}
	
	if(calcArgs.action === "subtract"){
		return calcArgs.arg1 - calcArgs.arg2;	
	}
	
	if(calcArgs.action === "divide"){
		return calcArgs.arg1 / calcArgs.arg2;	
	}
	
	if(calcArgs.action === "multiply"){
		return calcArgs.arg1 * calcArgs.arg2;	
	}
}

function calcTest2(){
	var testData = [
		{ arg1: 2, action: "add", arg2: 2},
		{ arg1: 10, action: "subtract", arg2: 3},
		{ arg1: 5, action: "multiply", arg2: 4},
		{ arg1: 12, action: "divide", arg2: 2}
	];
		
	for(var i = 0; i < testData.length; i++){
		var item = testData[i];
		var answer = objectCalculator(item);
		console.log("The result is " + answer);
	}	
}

calcTest2()
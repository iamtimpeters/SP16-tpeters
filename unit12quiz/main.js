
console.log("Hello World!");

var items = ["I", "passed", "the", "quiz"];

for (i = 0; i < items.length; i++){
	
	var divWrapper = document.getElementById("wrapper");
    var divParagraph = document.createElement("p");


	divParagraph.className = "quiz-word";
	divParagraph.innerHTML = items[i];	
	divWrapper.appendChild(divParagraph);
	 
};
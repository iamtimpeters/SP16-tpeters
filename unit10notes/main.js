
console.log("Hello World!");

$(document).ready(function(){
	
	$("#menu button").click(function(evt){
		
		console.log(evt);
		console.log(evt.target);
		console.log(this);
		
		$(evt.target).css("color", "green");
		$(this).css("color", "green");
		
	});
	
	$("#menu").click(function(e){
		
		console.log(this);
		console.log(e.target);
		
		var attr = $(e.target).data("banana");
		
		console.log(attr);
		
	});
	
	//other events besides click
	
	$("#one").mouseover(function(){
		$(this).css("background-color", "purple");
	});
	
	$(document).keydown(function(e){
		
		console.log(e);
		alert("What are you doing??");
		
	});
	
});


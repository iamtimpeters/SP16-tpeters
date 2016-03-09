// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("hello world!");


    //Make <tr>'s have bg color of yellow w/ hover	
	$("#my-table > tbody > tr").hover(
		function() {
	  	$(this).css("backgroundColor", "yellow");
	  	}, 
	    function() {
	    $(this).css("backgroundColor", "white");
	  	}
	);


	//Hide row of trash button that's clicked
	$(".glyphicon.glyphicon-trash").click(function(){
	    $(this).parent().parent().parent().hide( "slow" );
	});

	

	//Increase # of Units with (+) click
	$(".glyphicon.glyphicon-plus").click(function(){

		var td = ($(this).parent().parent().siblings());

		console.log(td);

		var newTd = td[4].innerText;

		console.log(newTd);

		var tdInteger = (parseInt(newTd) + 1);

		console.log(tdInteger);

		td[4].innerHTML = tdInteger;

	});

	//Decrease # of Units with (-) click
	$(".glyphicon.glyphicon-minus").click(function(){

		var td = ($(this).parent().parent().siblings());

		console.log(td);

		var newTd = td[4].innerText;

		console.log(newTd);

		var tdInteger = (parseInt(newTd) - 1);

		console.log(tdInteger);

		td[4].innerHTML = tdInteger;

	});

});
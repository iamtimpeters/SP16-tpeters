// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){

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

	

	//Increase # of Units by 1 with (+) click + recalculate Total
	$(".glyphicon.glyphicon-plus").click(function(){

		var allTd = ($(this).parent().parent().siblings());

		var unitsTd = parseFloat(allTd[4].innerText) + 1;

		var costTd = parseFloat(allTd[5].innerText);

		var newTotalTd = parseFloat(unitsTd * costTd).toFixed(2);

		allTd[4].innerHTML = unitsTd;

		allTd[6].innerHTML = newTotalTd;

	});

	//Decrease # of Units by 1 with (-) click + recalculate Total
	$(".glyphicon.glyphicon-minus").click(function(){

		var allTd = ($(this).parent().parent().siblings());

		var unitsTd = parseFloat(allTd[4].innerText) - 1;

		var costTd = parseFloat(allTd[5].innerText);

		var newTotalTd = parseFloat(unitsTd * costTd).toFixed(2);

		allTd[4].innerHTML = unitsTd;

		allTd[6].innerHTML = newTotalTd;

	});

});
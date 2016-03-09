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

	

	//Increase # of Units by 1 with (+) click
	$(".glyphicon.glyphicon-plus").click(function(){

		var allTd = ($(this).parent().parent().siblings());

		var unitsTd = allTd[4].innerText;

		var costTd = allTd[5].innerText;

		var totalTd = allTd[6].innerText;

		var tdNewUnits = (parseInt(unitsTd) + 1);

		var costTdDecimal = (parseFloat(costTd));

		var tdNewTotal = tdNewUnits * costTdDecimal;

		var tdNewTotalDecimal = parseFloat(tdNewTotal).toFixed(2);

		allTd[4].innerHTML = tdNewUnits;

		allTd[6].innerHTML = tdNewTotalDecimal;

	});

	//Decrease # of Units by 1 with (-) click
	$(".glyphicon.glyphicon-minus").click(function(){

		var allTd = ($(this).parent().parent().siblings());

		var unitsTd = allTd[4].innerText;

		var costTd = allTd[5].innerText;

		var totalTd = allTd[6].innerText;

		var tdNewUnits = (parseInt(unitsTd) - 1);

		var costTdDecimal = (parseFloat(costTd));

		var tdNewTotal = tdNewUnits * costTdDecimal;

		var tdNewTotalDecimal = parseFloat(tdNewTotal).toFixed(2);

		allTd[4].innerHTML = tdNewUnits;

		allTd[6].innerHTML = tdNewTotalDecimal;

	});

});
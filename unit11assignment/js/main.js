// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){

    //Make <tr>'s have bg color of yellow w/ hover	
	$("tbody > tr").hover(
		function() {
	  	$(this).css("backgroundColor", "yellow");
	  	}, 
	    function() {
	    $(this).css("backgroundColor", "white");
	  	}
	);

	//Increase # of Units by 1 with (+) click + recalculate Total
	//Decrease # of Units by 1 with (-) click + recalculate Total
	//Hide row of trash button that's clicked
	$("tr").click(function(row){

		if ($(row.target).hasClass("glyphicon-plus")) {

   			var units = parseFloat($(this).find("td:nth-child(5)").text()) + 1;
   			
   			var cost = parseFloat($(this).find("td:nth-child(6)").text());
   			
   			var total = parseFloat(units * cost).toFixed(2);

   			$(this).find("td:nth-child(5)").text(units);
   			$(this).find("td:nth-child(7)").text(total);

		} 
		
		else if ($(row.target).hasClass("glyphicon-minus")) {
    		
			var units = parseFloat($(this).find("td:nth-child(5)").text()) - 1;
   			
   			var cost = parseFloat($(this).find("td:nth-child(6)").text());
   			
   			var total = parseFloat(units * cost).toFixed(2);

   			$(this).find("td:nth-child(5)").text(units);
   			$(this).find("td:nth-child(7)").text(total);

		} 

		else if ($(row.target).hasClass("glyphicon-trash")){

    		$(this).hide( "slow" );

		}

	});

});
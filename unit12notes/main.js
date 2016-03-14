
console.log("Hello World!");

$(function(){
	
	var url = "http://jsonplaceholder.typicode.com/posts";
	
	$.get(url, /* callback */ function(result){
		console.log(result);
		
		// do something with it!
		result.forEach(function(post){
			var $p = $("<p></p>").text(post.body);
			$("body").append($p);
		});
		
	});
	
	/* $.get is just a wrapper around:
	$.ajax({
		
	});
	*/

});
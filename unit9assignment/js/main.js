// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("hello world!");

});

var $movies = $("#movie-menu");

var $movieDescriptions1 = $("#episode-one");
var $movieDescriptions2 = $("#episode-two");
var $movieDescriptions3 = $("#episode-three");
var $movieDescriptions4 = $("#episode-four");
var $movieDescriptions5 = $("#episode-five");
var $movieDescriptions6 = $("#episode-six");
var $movieDescriptions7 = $("#episode-seven");


console.log($movies);

//rigging a click event
	$( "div.col-md-12 > ul > li:contains('Phantom')" ).click(function(){
  	
  	$movieDescriptions1.show( "slow" );

  	$movieDescriptions2.hide( "slow" );
  	$movieDescriptions3.hide( "slow" );
  	$movieDescriptions4.hide( "slow" );
  	$movieDescriptions5.hide( "slow" );
  	$movieDescriptions6.hide( "slow" );
  	$movieDescriptions7.hide( "slow" );

  	$movieDescriptions1.css( "color", "yellow" );
  	$movieDescriptions1.css( "backgroundColor", "black" );
  	$( "div.col-md-12 > ul > li:contains('Phantom')" ).css( "backgroundColor", "black" );
  	$( "div.col-md-12 > ul > li:contains('Phantom') > a" ).css( "color", "yellow" );

  	$( "div.col-md-12 > ul > li:contains('Clones')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Clones') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Sith')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Sith') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Hope')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Hope') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Strikes')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Strikes') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Jedi')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Jedi') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Awakens')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Awakens') > a" ).removeAttr( "style" );
	});

	$( "div.col-md-12 > ul > li:contains('Clones')" ).click(function(){

  	$movieDescriptions2.show( "slow" );

  	$movieDescriptions1.hide( "slow" );
  	$movieDescriptions3.hide( "slow" );
  	$movieDescriptions4.hide( "slow" );
  	$movieDescriptions5.hide( "slow" );
  	$movieDescriptions6.hide( "slow" );
  	$movieDescriptions7.hide( "slow" );

  	$movieDescriptions2.css( "color", "yellow" );
  	$movieDescriptions2.css( "backgroundColor", "black" ); 
  	$( "div.col-md-12 > ul > li:contains('Clones')" ).css( "backgroundColor", "black" );
  	$( "div.col-md-12 > ul > li:contains('Clones') > a" ).css( "color", "yellow" );

  	$( "div.col-md-12 > ul > li:contains('Phantom')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Phantom') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Sith')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Sith') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Hope')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Hope') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Strikes')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Strikes') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Jedi')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Jedi') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Awakens')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Awakens') > a" ).removeAttr( "style" );  
	});

	$( "div.col-md-12 > ul > li:contains('Sith')" ).click(function(){

  	$movieDescriptions3.show( "slow" );

  	$movieDescriptions1.hide( "slow" );
  	$movieDescriptions2.hide( "slow" );
  	$movieDescriptions4.hide( "slow" );
  	$movieDescriptions5.hide( "slow" );
  	$movieDescriptions6.hide( "slow" );
  	$movieDescriptions7.hide( "slow" );

  	$movieDescriptions3.css( "color", "yellow" );
  	$movieDescriptions3.css( "backgroundColor", "black" ); 
  	$( "div.col-md-12 > ul > li:contains('Sith')" ).css( "backgroundColor", "black" );
  	$( "div.col-md-12 > ul > li:contains('Sith') > a" ).css( "color", "yellow" );

  	$( "div.col-md-12 > ul > li:contains('Clones')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Clones') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Phantom')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Phantom') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Hope')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Hope') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Strikes')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Strikes') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Jedi')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Jedi') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Awakens')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Awakens') > a" ).removeAttr( "style" );  
	});

	$( "div.col-md-12 > ul > li:contains('Hope')" ).click(function(){

  	$movieDescriptions4.show( "slow" );

  	$movieDescriptions1.hide( "slow" );
  	$movieDescriptions2.hide( "slow" );
  	$movieDescriptions3.hide( "slow" );
  	$movieDescriptions5.hide( "slow" );
  	$movieDescriptions6.hide( "slow" );
  	$movieDescriptions7.hide( "slow" );

  	$movieDescriptions4.css( "color", "yellow" );
  	$movieDescriptions4.css( "backgroundColor", "black" ); 
  	$( "div.col-md-12 > ul > li:contains('Hope')" ).css( "backgroundColor", "black" );
  	$( "div.col-md-12 > ul > li:contains('Hope') > a" ).css( "color", "yellow" );

  	$( "div.col-md-12 > ul > li:contains('Clones')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Clones') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Sith')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Sith') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Phantom')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Phantom') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Strikes')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Strikes') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Jedi')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Jedi') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Awakens')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Awakens') > a" ).removeAttr( "style" );  
	});

	$( "div.col-md-12 > ul > li:contains('Strikes')" ).click(function(){

  	$movieDescriptions5.show( "slow" );

  	$movieDescriptions1.hide( "slow" );
  	$movieDescriptions2.hide( "slow" );
  	$movieDescriptions3.hide( "slow" );
  	$movieDescriptions4.hide( "slow" );
  	$movieDescriptions6.hide( "slow" );
  	$movieDescriptions7.hide( "slow" );

  	$movieDescriptions5.css( "color", "yellow" );
  	$movieDescriptions5.css( "backgroundColor", "black" );
  	$( "div.col-md-12 > ul > li:contains('Strikes')" ).css( "backgroundColor", "black" );
  	$( "div.col-md-12 > ul > li:contains('Strikes') > a" ).css( "color", "yellow" );

  	$( "div.col-md-12 > ul > li:contains('Clones')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Clones') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Sith')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Sith') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Hope')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Hope') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Phantom')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Phantom') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Jedi')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Jedi') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Awakens')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Awakens') > a" ).removeAttr( "style" );   
	});

	$( "div.col-md-12 > ul > li:contains('Jedi')" ).click(function(){

  	$movieDescriptions6.show( "slow" );

  	$movieDescriptions1.hide( "slow" );
  	$movieDescriptions2.hide( "slow" );
  	$movieDescriptions3.hide( "slow" );
  	$movieDescriptions4.hide( "slow" );
  	$movieDescriptions5.hide( "slow" );
  	$movieDescriptions7.hide( "slow" );

  	$movieDescriptions6.css( "color", "yellow" );
  	$movieDescriptions6.css( "backgroundColor", "black" );
  	$( "div.col-md-12 > ul > li:contains('Jedi')" ).css( "backgroundColor", "black" );
  	$( "div.col-md-12 > ul > li:contains('Jedi') > a" ).css( "color", "yellow" );

  	$( "div.col-md-12 > ul > li:contains('Clones')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Clones') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Sith')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Sith') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Hope')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Hope') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Strikes')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Strikes') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Phantom')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Phantom') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Awakens')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Awakens') > a" ).removeAttr( "style" );   
	});

	$( "div.col-md-12 > ul > li:contains('Awakens')" ).click(function(){

  	$movieDescriptions7.show( "slow" );

  	$movieDescriptions1.hide( "slow" );
  	$movieDescriptions2.hide( "slow" );
  	$movieDescriptions3.hide( "slow" );
  	$movieDescriptions4.hide( "slow" );
  	$movieDescriptions5.hide( "slow" );
  	$movieDescriptions6.hide( "slow" );

  	$movieDescriptions7.css( "color", "yellow" );
  	$movieDescriptions7.css( "backgroundColor", "black" ); 
  	$( "div.col-md-12 > ul > li:contains('Awakens')" ).css( "backgroundColor", "black" );
  	$( "div.col-md-12 > ul > li:contains('Awakens') > a" ).css( "color", "yellow" );

  	$( "div.col-md-12 > ul > li:contains('Clones')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Clones') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Sith')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Sith') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Hope')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Hope') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Strikes')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Strikes') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Jedi')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Jedi') > a" ).removeAttr( "style" );
  	$( "div.col-md-12 > ul > li:contains('Phantom')" ).removeAttr( "style" ); 
  	$( "div.col-md-12 > ul > li:contains('Phantom') > a" ).removeAttr( "style" );  
	});







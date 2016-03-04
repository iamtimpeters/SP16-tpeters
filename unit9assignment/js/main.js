// https://learn.jquery.com/using-jquery-core/document-ready/


$(document).ready(function(){

    $( "div.col-md-12 > ul > li > a" ).click(function(){

            var divMovies = $(".movies.row");

            divMovies.hide( "slow" );

            var dataTarget = $(this).attr("data-target");

            $(this).css("color", "yellow");
            $(this).parent().css("backgroundColor", "black");
            $(this).parent().siblings().removeAttr( "style" ); 
            $(this).parent().siblings().children().removeAttr( "style" );

            console.log(dataTarget);

            var $Episode = $("#"+dataTarget);
            $Episode.css( "color", "yellow" );
            $Episode.css( "backgroundColor", "black" );
            $Episode.show( "slow" );

     });

});



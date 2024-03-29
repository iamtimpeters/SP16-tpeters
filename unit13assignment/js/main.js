// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
	
	var url = "http://parkland-csc175.github.io/csc175data/starwars/episode-list.json";

	var urlStem = "http://parkland-csc175.github.io/csc175data/"
	
    $.get(url, /* callback */ function(result){
                
         result.forEach(function(movies){
                    
             var $a = $("<a></a>").text(movies.name);

             var $div = $("<div></div>");

             $div.attr("id", "episode-" + movies.id);

             $div.addClass("movies row");

             $a.attr("href", "#");

             $a.attr("data-id", movies.id);

             $a.attr("data-url", movies.url);

             var $li = $("<li></li>");

             $li.append($a);

             $("#movie-menu").append($li);  

             $("#descriptions").append($div);

             $(".movies").css("display", "none");
            
           });
            
     });

     $("#movie-menu").click(function(anchors){

        $.get(urlStem + $(anchors.target).data("url"), /* callback */ function(episodes){

            $(".movies.row").hide( "slow" );

            $("div.movies.row > div").remove();

            var $h1 = $("<h1></h1>").text(episodes.title);

            var $p = $("<p></p>").text(episodes.description);

            var $subDiv = $("<div></div>");

            $subDiv.append($h1);

            $subDiv.append($p);

            $subDiv.addClass("col-md-12");

            $("#episode-" + $(anchors.target).data("id")).append($subDiv);

            $("#episode-" + $(anchors.target).data("id")).show( "slow" );

            $(anchors.target).css("color", "yellow");

            $(anchors.target).parent().css("backgroundColor", "black");

            $(anchors.target).parent().siblings().removeAttr( "style" ); 

            $(anchors.target).parent().siblings().children().removeAttr( "style" );

            $("#episode-" + $(anchors.target).data("id")).css({"color": "yellow", "backgroundColor": "black"});

        });

    });     

});


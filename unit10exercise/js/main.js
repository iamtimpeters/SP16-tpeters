// https://learn.jquery.com/using-jquery-core/document-ready/


$(document).ready(function(){

    $("#movie-menu").click(function(anchors){

            //Hide any movie descriptions already showing
                $(".movies.row").hide( "slow" );

            //Color the clicked <a> yellow
                $(anchors.target).css("color", "yellow");

            //Color the clicked <a>'s parent <ul>'s backgroud black
                $(anchors.target).parent().css("backgroundColor", "black");

            //Clear the (background) styling from other <ul>'s
                $(anchors.target).parent().siblings().removeAttr( "style" ); 

            //Clear the (text color) styling from other <a>'s
                $(anchors.target).parent().siblings().children().removeAttr( "style" );
                
            //Color the clicked <a>'s corresponding <div>'s color to yellow & bg color to black
                $("#" + $(anchors.target).data("target")).css({"color": "yellow", "backgroundColor": "black"});

            //Show the clicked <a>'s corresponding <div>
                $("#" + $(anchors.target).data("target")).show( "slow" );
   
     });

});




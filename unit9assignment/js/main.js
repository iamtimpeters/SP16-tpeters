// https://learn.jquery.com/using-jquery-core/document-ready/


    $( "div.col-md-12 > ul > li > a" ).click(function(){

        //Hide any movie descriptions already showing
            $(".movies.row").hide( "slow" );

        //Color the clicked <a> yellow
            $(this).css("color", "yellow");

        //Color the clicked <a>'s parent <ul>'s backgroud black
            $(this).parent().css("backgroundColor", "black");

        //Clear the (background) styling from other <ul>'s
            $(this).parent().siblings().removeAttr( "style" ); 

        //Clear the (text color) styling from other <a>'s
            $(this).parent().siblings().children().removeAttr( "style" );
            
        //Color the clicked <a>'s corresponding <div>'s color to yellow & bg color to black
            $("#" + $(this).attr("data-target")).css({"color": "yellow", "backgroundColor": "black"});

        //Show the clicked <a>'s corresponding <div>
            $("#" + $(this).attr("data-target")).show( "slow" );
   
     });




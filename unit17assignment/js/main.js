// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){

	   var toDoList = [];
	   	
	   var jsonReady = localStorage.getItem("toDoArray");
     var toDoReady = JSON.parse(jsonReady);

     console.log(toDoReady);

    if (toDoReady != null){
        for (i = 0; i < toDoReady.length; i++) {
         	   var eachTodo = toDoReady[i]
         	   console.log(toDoReady[i])
             var $trReady = $("<tr></tr>")
             var $tdReady = $("<td></td>").text(eachTodo);
             $("table").append($trReady);
             $trReady.append($tdReady);
             $tdButtonReady = $("<td></td>");
             $tdTimeStampReady = $("<td></td>");
             $spanOkReady = $("<span></span>")
             		$spanOkReady.addClass("glyphicon glyphicon-ok")
             $spanTrashReady = $("<span></span>")
             		$spanTrashReady.addClass("glyphicon glyphicon-trash")
             $completeButtonReady = $("<button></button>");
             		$completeButtonReady.attr("title", "complete");
             		$completeButtonReady.attr("type", "button");
             		$completeButtonReady.addClass("btn btn-icon");
             		$completeButtonReady.attr("data-action", "complete");
             		$completeButtonReady.append($spanOkReady);
             $removeButtonReady = $("<button></button>");
             		$removeButtonReady.attr("title", "remove");
             		$removeButtonReady.attr("type", "button");
             		$removeButtonReady.addClass("btn btn-icon");
             		$removeButtonReady.attr("data-action", "remove");
             		$removeButtonReady.append($spanTrashReady);
             $tdButtonReady.append($completeButtonReady);
             $tdButtonReady.append($removeButtonReady);
             $trReady.append($tdButtonReady);
             $trReady.append($tdTimeStampReady);
  	    };
    };

    $("button[data-action='remove']").click(function(){
       
       var rowIndex = $(this).parent().parent().index();
       console.log(rowIndex)
       var jsonRemove = localStorage.getItem("toDoArray");
       var toDoRemove = JSON.parse(jsonReady);
       toDoRemove.splice(rowIndex, 1);
       console.log(toDoRemove);
       localStorage.setItem("toDoArray", JSON.stringify(toDoRemove));
       $(this).parent().parent().remove();
       
    });

    $("button[data-action='complete']").click(function(){
       //add 'completed' class
       $(this).parent().parent().addClass("completed");

       //show green Success alert and hide after 3 sec. 
       $(".alert.alert-success").show( "slow" );
        function hideSuccess(){
                $(".alert.alert-success").hide( "slow" );
            }
        setTimeout(hideSuccess, (3 * 1000));

        //mark time since task was completed
        var rightNow = Date.now();
        var $clickedButton = $(this);
        $(this).parent().next().attr("data-start", rightNow);
        var firstTime = 0
        $(this).parent().next().text("Completed " + firstTime + " minutes ago.");
        
        //function to update how much time has passed
        function minuteTracker(){
          var newNow = Date.now();
          $(this).parent().next().text("");
          var elapsed = ((newNow - rightNow) / 1000) / 60;
          roundedElapsed = elapsed.toFixed(0);
          if(roundedElapsed < 2){
            $clickedButton.parent().next().text("Completed " + roundedElapsed + " minute ago.");
            } else {
            $clickedButton.parent().next().text("Completed " + roundedElapsed + " minutes ago.");
            }
        };  
        setInterval(minuteTracker, (60 * 1000));
    });

    $("#btn-todo-add").click(function(){
       var answer = $("#todo-text").val();
       if(toDoReady === null){
        toDoReady = []
       }
       toDoReady.push(answer);
       console.log(toDoReady);
       localStorage.setItem("toDoArray", JSON.stringify(toDoReady));
       var $tr = $("<tr></tr>")
       var $td = $("<td></td>").text(answer);
       $("table").append($tr);
       $tr.append($td);
       $tdButton = $("<td></td>");
       $tdTimeStampReady = $("<td></td>");
       $spanOk = $("<span></span>")
       		$spanOk.addClass("glyphicon glyphicon-ok")
       $spanTrash = $("<span></span>")
       		$spanTrash.addClass("glyphicon glyphicon-trash")
       $completeButton = $("<button></button>");
       		$completeButton.attr("title", "complete");
       		$completeButton.attr("type", "button");
       		$completeButton.addClass("btn btn-icon");
       		$completeButton.attr("data-action", "complete");
       		$completeButton.append($spanOk);

          //adding button functionality to Complete button
          $completeButton.click(function(){

            //add 'completed' class
            $(this).parent().parent().addClass("completed");

            //show green Success alert and hide after 3 sec. 
            $(".alert.alert-success").show( "slow" );
              function hideSuccess(){
                $(".alert.alert-success").hide( "slow" );
              };
              setTimeout(hideSuccess, (3 * 1000));

            //mark time since task was completed
              var rightNow = Date.now();
              var $clickedButton = $(this);
              $(this).parent().next().attr("data-start", rightNow);
              var firstTime = 0
              $(this).parent().next().text("Completed " + firstTime + " minutes ago.");
                
            //function to update how much time has passed
              function minuteTracker(){
                var newNow = Date.now();
                $(this).parent().next().text("");
                var elapsed = ((newNow - rightNow) / 1000) / 60;
                roundedElapsed = elapsed.toFixed(0);
                if(roundedElapsed < 2){
                  $clickedButton.parent().next().text("Completed " + roundedElapsed + " minute ago.");
                  } else {
                  $clickedButton.parent().next().text("Completed " + roundedElapsed + " minutes ago.");
                  }  
              };  
              setInterval(minuteTracker, (60 * 1000));
          });

       $removeButton = $("<button></button>");
       		$removeButton.attr("title", "remove");
       		$removeButton.attr("type", "button");
       		$removeButton.addClass("btn btn-icon");
       		$removeButton.attr("data-action", "remove");
       		$removeButton.append($spanTrash);

        //adding button functionality to Remove button
          $removeButton.click(function(){

            var rowIndex = $(this).parent().parent().index();
            //localStorage.removeItem(key);
            console.log(rowIndex)
            var jsonRemove = localStorage.getItem("toDoArray");
            var toDoRemove = JSON.parse(jsonReady);
            toDoRemove.splice(rowIndex, 1);
            console.log(toDoRemove);
            localStorage.setItem("toDoArray", JSON.stringify(toDoRemove));
            $(this).parent().parent().remove();

          });

       $tdButton.append($completeButton);
       $tdButton.append($removeButton);
       $tr.append($tdButton);
       $tr.append($tdTimeStampReady);
    });

    $("#btn-clear-mem").click(function(){
      localStorage.clear();
    });

});
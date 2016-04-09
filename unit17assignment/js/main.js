// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
	   	
	  var jsonReady = localStorage.getItem("toDoArray");
    var toDoReady = JSON.parse(jsonReady);

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

    $(".table").on("click", function(row){

      var targetAction = $(row.target).data("action");
           
      if (targetAction == "complete"){

           //add 'completed' class
           $(row.target).parent().parent().addClass("completed");

           //show green Success alert and hide after 3 sec. 
           $(".alert.alert-success").show( "slow" );
            function hideSuccess(){
                    $(".alert.alert-success").hide( "slow" );
                }
            setTimeout(hideSuccess, (3 * 1000));

            //mark time since task was completed
            var rightNow = Date.now();
            var $clickedButton = $(row.target);
            $(row.target).parent().next().attr("data-start", rightNow);
            $(row.target).parent().next().text("Completed 0 minutes ago.");
            
            //function to update how much time has passed
            function minuteTracker(){
              var newNow = Date.now();
              var elapsed = ((newNow - rightNow) / 1000) / 60;
              roundedElapsed = elapsed.toFixed(0);
              if(roundedElapsed < 2){
                $clickedButton.parent().next().text("Completed " + roundedElapsed + " minute ago.");
                } else {
                $clickedButton.parent().next().text("Completed " + roundedElapsed + " minutes ago.");
                }
            };  
            setInterval(minuteTracker, (60 * 1000));
      
      } else if (targetAction == "remove"){

          var rowIndex = $(row.target).parent().parent().index();
          var jsonRemove = localStorage.getItem("toDoArray");
          var toDoRemove = JSON.parse(jsonReady);
          toDoRemove.splice(rowIndex, 1);
          localStorage.setItem("toDoArray", JSON.stringify(toDoRemove));
          $(row.target).parent().parent().remove();

      } else if ($(row.target).hasClass("glyphicon-ok")){

           //add 'completed' class
           $(row.target).parent().parent().parent().addClass("completed");

           //show green Success alert and hide after 3 sec. 
           $(".alert.alert-success").show( "slow" );
            function hideSuccess(){
                    $(".alert.alert-success").hide( "slow" );
                }
            setTimeout(hideSuccess, (3 * 1000));

            //mark time since task was completed
            var rightNow = Date.now();
            var $clickedButton = $(row.target).parent();
            $(row.target).parent().parent().next().attr("data-start", rightNow);
            $(row.target).parent().parent().next().text("Completed 0 minutes ago.");
            
            //function to update how much time has passed
            function minuteTracker(){
              var newNow = Date.now();
              var elapsed = ((newNow - rightNow) / 1000) / 60;
              roundedElapsed = elapsed.toFixed(0);
              if(roundedElapsed < 2){
                $clickedButton.parent().next().text("Completed " + roundedElapsed + " minute ago.");
                } else {
                $clickedButton.parent().next().text("Completed " + roundedElapsed + " minutes ago.");
                }
            };  
            setInterval(minuteTracker, (60 * 1000));

      } else if ($(row.target).hasClass("glyphicon-trash")){

          var rowIndex = $(row.target).parent().parent().parent().index();
          var jsonRemove = localStorage.getItem("toDoArray");
          var toDoRemove = JSON.parse(jsonReady);
          toDoRemove.splice(rowIndex, 1);
          localStorage.setItem("toDoArray", JSON.stringify(toDoRemove));
          $(row.target).parent().parent().parent().remove();

      }

    });

    $("#btn-todo-add").click(function(){
       var answer = $("#todo-text").val();
       if(toDoReady === null){
        toDoReady = []
       }
       toDoReady.push(answer);
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
       $removeButton = $("<button></button>");
       		$removeButton.attr("title", "remove");
       		$removeButton.attr("type", "button");
       		$removeButton.addClass("btn btn-icon");
       		$removeButton.attr("data-action", "remove");
       		$removeButton.append($spanTrash);
       $tdButton.append($completeButton);
       $tdButton.append($removeButton);
       $tr.append($tdButton);
       $tr.append($tdTimeStampReady);
    });

    $("#btn-clear-mem").click(function(){
      localStorage.clear();
    });

});
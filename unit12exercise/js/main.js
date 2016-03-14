// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
	
	var url = "http://parkland-csc175.github.io/csc175data/todos/list.json";
	
    $.get(url, /* callback */ function(result){
                
         result.forEach(function(todos){
                    
             var $li = $("<li></li>").text(todos.job);
                    
                    
             if (todos.done) {
                  $($li).addClass("done");
                  }
                        
              $("#todo-list").append($li);
            
           });
            
     });

});
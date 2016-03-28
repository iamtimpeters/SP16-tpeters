// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("hello world!");
    
    $("#email_form").submit(function(e){
       
       var $email_1 = $("#email_1");
       
       // check if empty/null
              
       if($email_1.val() == null 
            || $email_1.val() == undefined
            || $email_1.val() == ""
            || $email_1.val() == " "){
                
            e.preventDefault();
            
            var $err = $("<p>Hey this is wrong!</p>");
            $email_1.parent().append($err);
            
            return false; //not absolutely required, but good practice 
       }       
              
      // valid email address checking
      
      if($email_1.val().indexOf("@") < 0
          || $email_1.val().indexOf(".") < 0){
          e.preventDefault();
          return false;
      }
        
    });

});
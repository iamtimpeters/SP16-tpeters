// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    function printDate(){
            
        //from http://stackoverflow.com/questions/20456712/how-to-get-current-time-with-jquery
               var currentdate = new Date(); 
                var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() +   
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
               $("#output").append(datetime);
            }
            
    var intervalKey = null;  
    
    $("#store-input").click(function(){
        var answer = prompt("Give me some text, please.");
        console.log(answer);
        localStorage.setItem("userInput", JSON.stringify(answer));
    });
    
    $("#retrieve-data").click(function(){
        var json = localStorage.getItem("userInput");
        $("#output").append(json);
    });
    
    $("#go-google").click(function(){
        var json = localStorage.getItem("userInput");
        $("#output").append(json);
        var url = "https://www.google.com";
        url += "/#q=" + json;
        document.location.assign(url);
    });
    
    $("#start-interval").click(function(){
        
        intervalKey = setInterval(printDate, (5 * 1000));
    });
    
    $("#stop-interval").click(function(){
        
        clearInterval(intervalKey);
    });
    
     $("#delayed-message").click(function(){
        
        var myName = "Tim Peters"
        
        function printName(){
                $("#output").append(myName);
            }
            
            setTimeout(printName, (3 * 1000));
            
    });
    
});
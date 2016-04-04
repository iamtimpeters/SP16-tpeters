// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    $("#btn-one").click(function(){
        alert("Whoa whoa.");
    });
    
    $("#btn-two").click(function(){
        var answer = prompt("What's your name?");
        console.log(answer);
    });
    
     $("#btn-three").click(function(){
        console.log(document.location.search);
        console.log(document.location.hash);
        
        var term = "nfl";
        var url = "https://www.bing.com";
        url += "/search?q=" + term;
        document.location.assign(url);
    });
    
      $("#btn-four").click(function(){
  
            function doSomething(){
                alert("some annoying ad");
            }
            
            setTimeout(doSomething, (10 * 1000));
            
            // wait until all other functions are done
            // executing and then execute this
            /* setTimeout(doSomething, 0); */
  
    });
    
        $("#btn-five").click(function(){
            
            //this shows how to execute a function 5x
            //every 3 seconds on a page
            
            var intervalKey = null;
            var counter = 0;
  
            function doSomething(){
                counter += 1;
                
                if(counter > 5){
                    clearInterval(intervalKey);
                }
                
              console.log("I'm in an interval!")
            }
            
            intervalKey = setInterval(doSomething, (3 * 1000));
            
    });
    
      $("#btn-six").click(function(){
        
        localStorage.setItem("someKey", JSON.stringify({
            productId: 33333,
            productName: "Widget"
        }));
        
    });
    
      $("#btn-seven").click(function(){
        
        var json = localStorage.getItem("someKey");
        
        //changes it from a JSON string into an actual JavaScript object
        var product = JSON.parse(json);
        console.log(product);
        
        
    });
    
    
    
});
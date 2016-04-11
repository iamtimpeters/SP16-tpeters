// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
   //Object-oriented JavaScript
    
   function Car(brandParam, engineParam){
       
       this.brand = brandParam || "Chevrolet";
       this.engine = engineParam || "5.7L V8"
       
       this.honk = function(){
           console.log("HOOONNNNNNK");
       }
   }
   
   var defaultCar = new Car();
   var customCar = new Car("Ford", "1.8L I4");
  
   
   /////////////////////////////////////////////////////////////////////
   //KnockoutJS Notes
   
      var viewModel = {
          heading: ko.observable("Eric's Heading"),
          
          items: ko.observableArray([]),
          
          updateHeading: function(){
              var newHeading = "The time is: " + Date.now();
              this.heading(newHeading);
          },
          
          addToItems: function(){
              this.items.push({
                  name: "Some Item" + Date.now(),
                  completed: false
              });
          }
      };
        
      // links the viewModel to the HTML  
      ko.applyBindings(viewModel);
        

});
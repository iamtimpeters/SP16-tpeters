// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    var url = "https://parkland-csc175.github.io/csc175data/cars/car-makes.json";

    $.get(url, /* callback */ function(result){

    	var carData = result;

    	console.log(carData); 

    	function AddingCars(){

    		var self = this;

    		self.carBrands = ko.observableArray(carData);

    		self.addCar = function() {
    			self.carBrands.push({
    				make_display: $("#brand-text").val(),
	            	make_country: $("#country-text").val()
    			});
    			self.carBrands.sort(function (left, right) { 
    				return left.make_display == right.make_display ? 0 : (left.make_display < right.make_display ? -1 : 1) })
    		};	

    		self.removeCar = function(brand) {
    			self.carBrands.remove(brand);
    		}

    	}

    ko.applyBindings(new AddingCars());

    });

});
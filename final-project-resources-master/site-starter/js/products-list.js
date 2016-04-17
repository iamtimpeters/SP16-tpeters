// custom code for parkland bookstore

$(document).ready(function(){
    
    var url = "https://parkland-csc175.github.io/csc175data/bestbuy/products-list.json";

    $.get(url, /* callback */ function(result){

    	var productsData = result.products;

    	console.log(productsData);

    	function AddingProducts(){

    		var self = this;

    		self.products = ko.observableArray(productsData);

    	};

    ko.applyBindings(new AddingProducts());

    });

});
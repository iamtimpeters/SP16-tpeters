// custom code for parkland bookstore

$(document).ready(function(){
    
    var url = "https://parkland-csc175.github.io/csc175data/bestbuy/product-details-4506800.json";

    $.get(url, /* callback */ function(result){

    	var productsDetailData = result.products;

    	console.log(productsDetailData);

    	function AddingProductDetail(){

    		var self = this;

    		self.details = ko.observableArray(productsDetailData);

    	};

    ko.applyBindings(new AddingProductDetail());

    });

});
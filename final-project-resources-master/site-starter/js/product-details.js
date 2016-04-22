// custom code for parkland bookstore

$(document).ready(function(){
    
    //var url = "https://parkland-csc175.github.io/csc175data/bestbuy/product-details-4506800.json";

    var urlFirstHalf = "https://api.bestbuy.com/v1/products(sku="
    
    var productCategory = document.location.hash.slice(1)
    
    var urlSecondHalf = ")?format=json&apiKey=zap8x2yv8ryc6jc9bet42dkp"
    
    var url = urlFirstHalf + productCategory + urlSecondHalf;

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
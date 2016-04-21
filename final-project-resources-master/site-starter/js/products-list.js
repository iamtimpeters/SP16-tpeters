// custom code for parkland bookstore

$(document).ready(function(){
    
    var url = "https://parkland-csc175.github.io/csc175data/bestbuy/products-list.json";

    $.get(url, /* callback */ function(result){

    	var productsData = result.products;

    	console.log(productsData);

    	function AddingProducts(){

    		var self = this;

    		self.products = ko.observableArray(productsData);

            self.productDetailLink = function(products){
                var localSource = "file:///Users/Tim/Documents/Parkland%20classes/CSC175/SP16-tpeters/final-project-resources-master/site-starter/product-details.html";    
                var productSku = products.sku;
                localSource += "#" + productSku
                console.log(document.location.hash);
                console.log(document.location.hash.slice(1));
                document.location.assign(localSource);
            };

    	};

    ko.applyBindings(new AddingProducts());

    });

});
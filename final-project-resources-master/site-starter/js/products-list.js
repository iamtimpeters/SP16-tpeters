// custom code for parkland bookstore

$(document).ready(function(){

    var urlFirstPart = "https://api.bestbuy.com/v1/products(categoryPath.id="
    
    var productCategory = document.location.hash.slice(1)
    
    var urlSecondPart = ")?apiKey=zap8x2yv8ryc6jc9bet42dkp&sort=name.asc&page="

    var productPageNum = 1

    var urlThirdPart = "&format=json"
    
    var url = urlFirstPart + productCategory + urlSecondPart + productPageNum + urlThirdPart;

    $.get(url, /* callback */ function(result){

    	var productsData = result.products;
        var currentPage = result.currentPage;

    	console.log(productsData);

        console.log(currentPage);

    	function AddingProducts(){

    		var self = this;

    		self.products = ko.observableArray(productsData);

            //self.thisPage = ko.observableArray(currentPage);

            self.productDetailLink = function(products){
                var localSource = "file:///Users/Tim/Documents/Parkland%20classes/CSC175/SP16-tpeters/final-project-resources-master/site-starter/product-details.html";    
                var productSku = products.sku;
                localSource += "#" + productSku
                console.log(document.location.hash);
                console.log(document.location.hash.slice(1));
                document.location.assign(localSource);
            };

            self.nextPage = function(){
                
               var nextPage = productPageNum + 1

               url = urlFirstPart + productCategory + urlSecondPart + nextPage + urlThirdPart;

               $.get(url, /* callback */ function(newResult){

                    self.products.push(newResult.products);

                    //var newProductsData = newResult.products;

                    //self.products = ko.observableArray(newProductsData);

                });

            };

    	};

    ko.applyBindings(new AddingProducts());

    });

});
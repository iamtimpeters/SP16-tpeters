// custom code for parkland bookstore

$(document).ready(function(){
    
    var url = "https://parkland-csc175.github.io/csc175data/bestbuy/categories-list.json";

    $.get(url, /* callback */ function(result){

    	var categoriesData = result.categories;

    	console.log(categoriesData)

    	function AddingCategories(){

    		var self = this;

    		self.categories = ko.observableArray(categoriesData);

    	};

    ko.applyBindings(new AddingCategories());

    });

});
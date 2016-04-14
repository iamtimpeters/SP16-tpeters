# CSC 175 Final Project
Resources for the CSC 175 Final Project. 

##Background
The Parkland Bookstore now has a partnership with Best Buy. We are going to build an interactive catalog for the bookstore so that students can see what products they will be able to purchase.

##API 
Obtain an API Key from Best Buy [HERE](https://developer.bestbuy.com/documentation/getting-started)

Use Best Buy's API Docs to create your Categories/Products/Products Details pages. It's suggested to use the Recommendations API for getting the top categories and products
- [Recommendations](https://developer.bestbuy.com/documentation/recommendations-api#documentation/recommendations-api-most-popular-viewed)
- [Categories](https://developer.bestbuy.com/documentation/categories-api)
- [Products](https://developer.bestbuy.com/documentation/products-api)

### Query Builder
The Query Builder allows you to craft an API URL that you can then use for an AJAX call. Check it out
- [Query Builder](http://bestbuyapis.github.io/bby-query-builder/#/recommendations)

### Working with Best Buy API Urls
When you use the Best Buy API, you'll find something like `&callback=JSON_CALLBACK` within the URL. This is due to security reasons with making cross-domain AJAX calls. jQuery actually handles this for us already, so since we're using jQuery you can __REMOVE THAT PART FROM THE URL__

##site-starter folder
This contains a starting point for your project if you are in need. __YOU ARE NOT REQUIRED TO USE IT__

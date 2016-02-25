
console.log("Hello World!");



var blogArticles = [{
		title: "Advanced Performance Audits With DevTools",
		author: "Paul Irish",
		publishedOn: "Mar 27th, 2015",
		url: "http://www.paulirish.com/2015/advanced-performance-audits-with-devtools/",
		content: [{
				heading: "",
				paragraph: "In this doc, we look at the scrolling of CNET, input latency on CNET, some very interesting challenges on the responsive Time.com, and infinite scroll on Google Play’s desktop site."
			},{
				heading: "",
				paragraph: "The intended audience is browser engineers and performance-minded frontend developers. It’s fairly advanced, but I’m spelunking deep to identify how the sites butt heads with the browser APIs and architecture."
			},{
				heading: "",
				paragraph: "Lastly, we’re using this research to improve Chrome DevTools and what you hear from Chrome."
			}	
		]
	},{
		title: "Introducing RAIL: A User-Centric Model For Performance",
		author: "Paul Irish & Paul Lewis",
		publishedOn: "10/2/2015",
		url: "http://www.smashingmagazine.com/2015/10/rail-user-centric-model-performance/",
		content: [{
				heading: "Slow",
				paragraph: "Is changing the DOM slow? What about loading a <script> in the <head>? JavaScript animations are slower than CSS ones, right? Also, does a 20-millisecond operation take too long? What about 0.5 seconds? 10 seconds? "
			},{
				heading: "",
				paragraph: "While it’s true that different operations take different amounts of time to complete, it’s hard to say objectively whether something is slow or fast without the context of when it’s happening. For example, code running during idle time, in a touch handler or in the hot path of a game loop each has different performance requirements. Put another way, the people using your website or app have different performance expectations for each of those contexts. Like every aspect of UX, we build for our users, and what they perceive is what matters most. In fact, number one on Google’s ten things we know to be true is “Focus on the user and all else will follow.”"
			},{
				heading: "",
				paragraph: "Asking “What does slow mean?,” then, is really the wrong question. Instead, we need to ask “What does the user feel when they’re interacting with the things we build?”"
			}
		]	
}];

for (i = 0; i < blogArticles.length; i++){
    var divBlogContainer = document.getElementById("blog-container");
    var divArticleWrapper = document.createElement("div");
    var divContentWrapper = document.createElement("div");
    var h1ArticleHeader = document.createElement("h1");
    var h2ArticleAuthor = document.createElement("h2");
    var h3ArticleDate = document.createElement("h3");
    

    divBlogContainer.appendChild(divArticleWrapper);
    divArticleWrapper.className = "article-wrapper";

    divArticleWrapper.appendChild(h1ArticleHeader);
    h1ArticleHeader.innerHTML = blogArticles[i].title;

    divArticleWrapper.appendChild(h2ArticleAuthor);
    h2ArticleAuthor.innerHTML = blogArticles[i].author;

    divArticleWrapper.appendChild(h3ArticleDate);
    h3ArticleDate.innerHTML = blogArticles[i].publishedOn;

    divArticleWrapper.appendChild(divContentWrapper);
    divContentWrapper.className = "content-wrapper";

    var contentArray = blogArticles[i].content;

    for (j = 0; j < contentArray.length; j++){

   	var h3ContentHeading = document.createElement("h3");
    	var pContent = document.createElement("p");

    	if (contentArray[j].heading != ""){
   		divContentWrapper.appendChild(h3ContentHeading);
   		h3ContentHeading.innerHTML = contentArray[j].heading;
   		};

   	divContentWrapper.appendChild(pContent);
   	pContent.innerHTML = contentArray[j].paragraph;

        };

};

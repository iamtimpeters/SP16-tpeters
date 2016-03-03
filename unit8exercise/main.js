
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

var $container = $("#blog-container");

for (i = 0; i < blogArticles.length; i++){
	var $wrapper = $("<div></div>");
	$wrapper.addClass("article-wrapper");
	$container.append($wrapper);
	$wrapper.append("<h1>" + blogArticles[i].title + "</h1>");
	$wrapper.append("<h2>" + blogArticles[i].author + "</h2>");
	$wrapper.append("<h2>" + blogArticles[i].publishedOn + "</h2>");
	var $contentWrapper = $("<div></div>");
	$contentWrapper.addClass("content-wrapper");
	$wrapper.append($contentWrapper);

	var contentArray = blogArticles[i].content;

	for (j = 0; j < contentArray.length; j++){

		if (contentArray[j].heading != ""){
			$contentWrapper.append("<h3>"+contentArray[j].heading+"</h3>")
		};

		var $p = $("<p></p>");

		$p.text(contentArray[j].paragraph);

		$contentWrapper.append($p);
	
	};

	//rigging a click event
	$wrapper.click(function(){
	alert("TIM PETERS!");
	});

};





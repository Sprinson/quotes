$(document).ready(function(){



	var url = "https://jsonp.afeld.me/?url=http%3A%2F%2Fquotes.stormconsultancy.co.uk%2Frandom.json&callback=?";

	$("#getQuote").on("click", function(){
		$.getJSON(url, function(json){
			$(".quote").html(json["quote"]);
			$(".author").html(json["author"]);
			//$(".quote").html(JSON.stringify(json));
			var author = json["author"];
			var quote = json["quote"];
			
			console.log(json);

			var html = "";

			
		});
	});

	 $('#tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
    }
  });
});

var request = require('request');
var cheerio = require('cheerio');

request('http://www.economist.com/sections/united-states', function (error, response, html) {
  	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);

		var parsedResults2 = [];
		$('hgroup.content-header').each(function(i, element){
			// Select the div class='story' block
			var breakdown = $(this).children();
			var thumbnail, imgSRC, summary, summaryBlock, title2, url2
			

			for(var i = 0; i < $(this).contents().length; i++){
				if(breakdown.eq(i).hasClass('thumbnail')){
					thumbnail = breakdown.eq(i);
					imgSRC = thumbnail.children().eq(0).children().eq(0).attr('src');
					//var j = i+1;
				};
				
				if(breakdown.eq(i).hasClass('summary')){
					summaryBlock = breakdown.eq(i);
					summary = summaryBlock.text();
				};

				if(breakdown.eq(i).is('h3')){
					h3 = breakdown.eq(i).children().eq(0);
					title2 = h3.text();
					url2 = h3.attr('href');
					//h3 = 'TEST0';
					//title2 = 'TEST1';
					//url2 = 'TEST2';
				};
				
			};	


			/*
			##### Obsolete code, does not filter appropriately.
			##### Our code needs to be able to filter through the
			##### html and check the element/class name and
			##### assign variable based on that scheme.


			// Parse thumbnail element block
			var thumbnail = breakdown.eq(0);
			// Parse thumbnail image source url
			var imgSRC = thumbnail.children().eq(0).children().eq(0).attr('src')
			// Parse <a> element block containing external link and title
			var h3 = breakdown.eq(1).children().eq(0)
			// Parse the link title
			var title2 = h3.text();
			// Parse the href attribute from the "h3" element
			var url2 = h3.attr('href');

			var summaryBlock = breakdown.eq(3);
			var summary = summaryBlock.text();

			*/


			// Our parsed meta data object
			var metadata2 = {
			title2: title2,
			url2: url2,
			imgSRC: imgSRC,
			summary: summary
			};
			// Push meta-data into parsedResults array
			parsedResults2.push(metadata2);
		});
		// Log our finished parse results in the terminal
		console.log(parsedResults2);
		//console.log(breakdown);
	}
});
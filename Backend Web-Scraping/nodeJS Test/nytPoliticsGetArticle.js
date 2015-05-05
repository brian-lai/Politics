var request = require('request');
var cheerio = require('cheerio');

request('http://www.nytimes.com/pages/politics/index.html', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var parsedResults = [];

        $('div.story').each(function(i, element){
            var h3 = $(this).find( "h3" )
            var h3A = h3.children().eq(0)
            var title = h3A.text()
            var url = h3A.attr("href")

            var summary = $(this).find("p").text()


            var metadata = {
                //rank: parseInt(rank),
                title: title,
                url: url,
                summary: summary
                //points: parseInt(points),
                //username: username,
                //comments: parseInt(comments)
            };
            // Push meta-data into parsedResults array
            parsedResults.push(metadata);



        });
        // Log our finished parse results in the terminal
        console.log(parsedResults);
    }
});

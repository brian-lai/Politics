var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var fs      = require('fs');
var app     = express();

require('events').EventEmitter.prototype._maxListeners = 100;

app.get('/scrape', function (req, res) {
    var url = 'http://www.nytimes.com/2015/06/01/us/politics/senate-nsa-surveillance-usa-freedom-act.html?ref=politics';
    request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            var title, bodyText, date, url;
            var json = { title : "", body : "", date : "", url : ""};

            $('article').each(function(i, element){
                // Select the previous element
                title = $(this).children().eq(0).children().eq(0).children().eq(2);
                // Parse the link title
                // var body = $(this).children().eq(1);
                // var bodyParagraph = body.find("p.story-body-text story-content");
                // var bodyText = "";
                // for (var i = 0; i<bodyParagraph.length();i++){
                //     bodyText += bodyParagraph[i].text();
                // }
                // Parse the href attribute from the "a" element
                date = $(this).find("time").text();

                // Our parsed meta data object
                json.title = title;
                json.body  = bodyText;
                json.date  = date;
                json.url   = url;
                // Push meta-data into parsedResults array
            });
            // Log our finished parse results in the terminal
            fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

                console.log('File successfully written! - Check your project directory for the output.json file');

            });
        }
    });
    res.send('Check your console!');
});


app.listen("3000")
console.log("Magic happens on port 3000");
exports = module.exports = app;

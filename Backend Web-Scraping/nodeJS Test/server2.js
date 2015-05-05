var request = require('request');
var cheerio = require('cheerio');

request('http://www.nytimes.com/pages/politics/index.html', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var parsedResults = [];
    $('div.storyHeader').each(function(i, element){
      // Select the previous element
      var a = $(this).children().eq(0).children().eq(0);
            // Parse the link title
      var title = a.text();
      // Parse the href attribute from the "a" element
      var url = a.attr('href');

      // Our parsed meta data object
      var metadata = {
        title: title,
        url: url
      };
      // Push meta-data into parsedResults array
      parsedResults.push(metadata);
    });
    // Log our finished parse results in the terminal
    console.log(parsedResults);




    var parsedResults2 = [];
    $('div.story').each(function(i, element){
      // Select the previous element
      var a2 = $(this).children().eq(2).children().eq(0);
            // Parse the link title
      var title2 = a2.text();
      // Parse the href attribute from the "a2" element
      var url2 = a2.attr('href');

      // Our parsed meta data object
      var metadata2 = {
        title2: title2,
        url2: url2
      };
      // Push meta-data into parsedResults array
      parsedResults2.push(metadata2);
    });
    // Log our finished parse results in the terminal
    console.log(parsedResults2);
  }


  fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

      console.log('File successfully written! - Check your project directory for the output.json file');

  })

  
});

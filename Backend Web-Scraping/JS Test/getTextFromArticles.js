location.assign("http://www.nytimes.com/pages/politics/index.html")

setTimeout(function() {
    var storiesClass = document.getElementsByClassName("story");
    var list = [];
    for(var i = 0; i < storiesClass.length; i++){
        //grabs list of items under tag <h3>
        var h3TagName = storiesClass[i].getElementsByTagName('h3');
        for (var j = 0; j < h3TagName.length; j++) {
            //grabs list of items under the tag <a> - these are the articles' 
            //names and their links
            var articleTag = h3TagName[j].getElementsByTagName('a');
            for (var k = 0; k < articleTag.length; k++) {
                /*
                commented out appending names of articles to list
                and printing out links to those articles
                
                list.push(articleTag[k].innerHTML);
                console.log(articleTag[k].attributes.href);
                */
                list.push(articleTag[k].attributes.href.value);
                //console.log(articleTag[k].innerHTML);
            }
        }
    }
},5000);

location.assign(list[0])

var articleText = document.getElementByclassName("story-body-text");
var textString;

for(var i = 0; i < articleText; i++){
    //grabs every line of text in article
    textString += (articleText[i].innerHTML + "\n");
}
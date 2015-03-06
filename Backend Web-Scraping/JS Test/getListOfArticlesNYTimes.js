location.assign("http://www.nytimes.com/pages/politics/index.html")

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
            //list.push(articleTag[k].attributes.href.value);
            list.push(articleTag[k].innerHTML);
        }
    }
}



/*
This is the use of the NYT Article search API.  Requires going to a web address formatted below...
var searchAPI = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="
var searchTerm = list[0]
searchTerm = searchTerm.replace(/\s/g,"+")
var filter = "&page=0&sort=oldest"
var keyAPI = "&api-key=434b6801d53d08cbfe19d769be9b6de0:12:71411641"

var newAddress = searchAPI + searchTerm + filter + keyAPI

//"http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=434b6801d53d08cbfe19d769be9b6de0:12:71411641"


location.assign(newAddress)
*/

location.assign(list[0])

var articleText = document.getElementByclassName("story-body-text");
var textString;

for(var i = 0; i < articleText; i++){
    //grabs every line of text in article
    textString += (articleText[i].innerHTML + "\n");
}
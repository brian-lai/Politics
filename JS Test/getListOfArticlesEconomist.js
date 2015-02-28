var newsClass = document.getElementsByClassName("news-package typog-package");
//var list = [];

for(var i = 0; i < newsClass.length; i++){
    //grabs article names under the tag <h2>
    var articleName = newsClass[i].getElementsByTagName('h2');
    //grabs the addresses of the articles under the tag <a>
    var articleLink = newsClass[i].getElementsByTagName('a');

    for (var j = 0; j < articleName.length; j++) {
        /*
        first line of code appends list of links to a list
        second line of code prints those links to console.

        list.push(articleLink[j].innerHTML);
        console.log(articleLink[j].attributes.href);
        */
        //prints out names of articles to console
        console.log(articleName[j].innerHTML);    
    }
    
}
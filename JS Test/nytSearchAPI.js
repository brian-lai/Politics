//This is the use of the NYT Article search API.  Requires going to a web address formatted below...
var searchAPI = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="
var searchTerm = list[0]
searchTerm = searchTerm.replace(/\s/g,"+")
var filter = "&page=0&sort=oldest"
var keyAPI = "&api-key=434b6801d53d08cbfe19d769be9b6de0:12:71411641"

var newAddress = searchAPI + searchTerm + filter + keyAPI

//"http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=434b6801d53d08cbfe19d769be9b6de0:12:71411641"


location.assign(newAddress)
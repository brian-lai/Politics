//SUJAY IS THE BEST

var key = "api-key=c15b2a78829ba58bbdd915dec1fcbbad%3A13%3A71411641"
var address = "http://api.nytimes.com/svc/elections/us/v3/finances/2008-present/candidates/P80003338.xml?"
document.location.href = (address+key)
location.assign(address + key)

var candidateID;
var candidateName;
var party;
var mailingCity;
var mailingState;


//function myFunction(){
window.onLoad = function(){
	candidateID = document.getElementsByTagName("id")[0].innerHTML
	candidateName = document.getElementsByTagName("name")[0].innerHTML
	party = document.getElementsByTagName("party")[0].innerHTML
	mailingCity = document.getElementsByTagName("mailing_city")[0].innerHTML
	mailingState = document.getElementsByTagName("mailing_state")[0].innerHTML
	
	alert(party)
	
}

//window.addEventListener("load",  myFunction())



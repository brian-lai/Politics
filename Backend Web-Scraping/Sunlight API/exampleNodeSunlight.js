var api = require("sunlight-congress-api");

var success = function(data){
    console.log(data);
}

api.init("SOMEAPIKEY");

api.votes().filter("year", "2012").call(success);
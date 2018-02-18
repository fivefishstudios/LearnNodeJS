var url = require('url');

var address = "http://www.sbc.net:8080/somefile.cshtml?parm1=2018&parm2=something+something";

var queryURL = url.parse(address, true);

console.log(queryURL);

console.log(queryURL.query);
console.log(queryURL.query.parm1);
console.log(queryURL.query.parm2);
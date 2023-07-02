const request = require("request");
//feature -> request
const cheerio = require("cheerio");
const chalk = require("chalk");
console.log("Before");
request('https://www.worldometers.info/coronavirus', cb); 
console.log("After");
function cb(error, response, html) {
if(error){
    console.error('error:', error); // Print the error if one occurred
}
else
    {
  //console.log('statusCode:',  response &&response.statusCode); // Print the response status code if a response was received
  //console.log('html:', html); // Print the HTML for the Google homepage.
  handlehtml(html);
    }
};
function handlehtml(html){
       let selTool = cheerio.load(html);
       let contentArr = selTool("#maincounter-wrap span");
       for(let i = 0;i<contentArr.length;i++){
        let data = selTool(contentArr[i]).text();
        console.log("data",data);
       }
}
/*******************************************************************************
/*******************************************************************************
 * In this exercise you will write a HTTPS client using request to download an 
 * image from the internet.
 * @nfdoyle
 ******************************************************************************/
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')              
       .on('error', function (err) {                                   
         throw err; 
       })
       .on('response', function (response) {                          
         console.log('Response Status Code: ', response.statusCode);
         console.log('Download starting...');
       })
       .on('end', function () {
         console.log('...Download completed!')
       })
       .pipe(fs.createWriteStream('./future.jpg'));              
/*******************************************************************************
/*******************************************************************************
In this exercise, you will use the built-in Node.js https library to write a 
simple HTTPS client (a program which makes HTTPS requests, as opposed to a 
server which handles HTTP(S) requests). We will be using https because 
github.io, where the HTML examples are hosted, requires it - but you could
do all of this with http if the connection didn't require the SSL (secure socket 
layer) encryption that https provides.
@nfdoyle
*******************************************************************************/

var https = require('https'); 

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTMLChunks () {

    
  
    /* Add your code here */
    https.get(requestOptions, function (response) {

        // set encoding of received data to UTF-8
        response.setEncoding('utf8');
      
        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
          console.log(data);
        });
      
        // the callback is invoked when all of the data has been received
        // (the `end` of the stream)
        response.on('end', function() {
          console.log('Response stream complete.');
        });
      
      });
    

}

getAndPrintHTMLChunks();

                             



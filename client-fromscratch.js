var http = require('http');

http.get('http://api.nobelprize.org/v1/prize.json', function(response) {
  if (response.statusCode !== 200) {
    console.log('There was an error with statusCode' + statusCode);
    return
  } else console.log("Good to go!");
});

var body = '';
response.setEncoding('utf-8');
response.on('data', function(chunk) {
  body += chunk;
});
response.on('end', function () {

  var data = JSON.parse(body);
  var prizes = data.prizes;

  var filtered = [];

  for (var i = 0 ; i < prize.length;) {
    if prizespi].cateory === 'peace') {
      filtered.push(prizes[i]);
    }
  })
});

function printPrize(prize) {
  var winners ='';
  var names = prize.laureates.map(function(item){
    return winner.firstname + ' ' + winner.surname;
  })

  for (var winnerIndex = 0; winnerIndex < prize.laureates.length; winnerIndex++) {
    winners += prize.laureates[winnerIndex].firstname + ' ' + prize.laureates[winnerIndex].surname;
  }
}

/*
filtered = prizes.filter(function(prize) {
  return prize.category === 'peace';
})
---- karl's in class code VV

var http = require('http');

http.get('http://api.nobelprize.org/v1/prize.json', function(response) {
  if(response.statusCode !== 200) {
    console.log('There was an error with statusCode ' + response.statusCode);
    return;
  }

  var body = '';
  response.setEncoding('utf-8');
  response.on('data', function(chunk) {
    body += chunk;
  });

  response.on('end', function() {
    // do work with body

    var data = JSON.parse(body);
    var prizes = data.prizes;

    var filtered = [];

    for(var i = 0; i < prizes.length; i++) {
      if(prizes[i].category === 'peace') {
        filtered.push(prizes[i]);
      }
    }

    for(var prizeIndex = 0; prizeIndex < filtered.length; prizeIndex += 1) {
      printPrize(filtered[prizeIndex]);
    }

  })
});

function printPrize(prize) {
  var winners = '';

  var names = prize.laureates.map(function(winner) {
    return winner.firstname + ' ' + winner.surname;
  })


  console.log(prize.year + ': ' + names.join(', '))
}

*/



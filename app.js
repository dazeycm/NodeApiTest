var express = require('express');
var app = express();

var responses = ["Yes, in due time",
"My sources say no",
"Definitely not",
"Yes",
"You will have to wait",
"I have my doubts",
"Outlook so so",
"Looks good to me!",
"Who knows?",
"Looking good!",
"Probably",
"Are you kidding?",
"Go for it!",
"Don't bet on it.",
'Forget about it.']

app.get('/', function(req, res) {
  res.json(responses);
});

app.get('/8ball/response', function(req, res) {
  var id = Math.floor(Math.random() * responses.length);
  var q = responses[id];
  res.json(q);
});

app.get('/8ball/question/:question', function (req, res) {
	console.log(req.params.question);
	var id = Math.floor(Math.random() * responses.length);
  	var q = responses[id];
  	res.json(q);
});


app.listen(process.env.PORT || 4444);
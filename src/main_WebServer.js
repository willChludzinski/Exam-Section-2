var powers = require('./common/util/math/myPowers.js');
var express = require('express');

var app = express();

//make vars
//num1, num2, numCUbe, numSquare




app.engine('html', require('ejs').renderFile);
app.set('views', './src/views/');
//app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'This is my home page!' },
        name: 'William',
        lastname: 'Chludzinski'
    };
    res.render('./pages/home.ejs', data2template);
});

app.get('/square', function(req, res) {
    var inpNumber = 2;
    var resultNumber = powers.square(inpNumber);
    var data2template = {
        head: { title: 'This is my square page' },
        inpNumber: 2,
        resultNumber: resultNumber
    };
    res.render('./pages/square.ejs', data2template);
});

app.get('/cube', function(req, res) {
    var inpNumber = 3;
    var resultNumber = powers.cube(inpNumber);
    var data2template = {
        head: { title: 'This is the cube page!' },
        inpNumber: 3,
        resultNumber: resultNumber
    };
    res.render('./pages/cube.ejs', data2template);
});

app.get('/about', function(req, res) {
    // res.status(200).render('about'); // NOTE_4 ilker, if no default "view engine" specified above, this will complain; "No default engine was specied and no extension was provided"
    res.status(200).render('./pages/about.html'); // NOTE_3b ilker, this is OK if you had done "app.engine('html', require('ejs').renderFile);" before
});

app.get('/*', function(req, res) {
    res.status(404).render('./pages/error.ejs', { head: { title: 'Error' } });
});


var server = app.listen(8015, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});
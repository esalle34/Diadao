
const express = require('express');
const path = require("path");
const app = express();
const main_route = path.join(__dirname, "/");


app.use('/js',express.static(main_route + '/js'));
app.use('/css',express.static(main_route + '/css'));
app.use('/img',express.static(main_route + '/img'));
app.use('/svg',express.static(main_route + '/svg'));
app.use('/fonts',express.static(main_route + '/fonts'));
app.use('/favicon.ico',express.static(main_route + '/favicon.ico'));

app.get('/', function (req, res) {
  res.sendFile(main_route +'/index.html');
})

app.listen(80, function () {
  console.log('Listening on port 80!')
})
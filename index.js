var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', process.env.PORT || 8000);

http.listen(app.get('port'), function(){
  console.log('listening on *: ' + app.get('port'));
});

express = require('express');

app = express();

middleware = require('./middleware.js');

app.get('/', middleware.logger, middleware.loginRequired, function(req, res){
res.send('Hello World');
});

app.listen(3000, function(){
console.log('Server started on port 3000');
});

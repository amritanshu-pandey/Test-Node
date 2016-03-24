express = require('express');

app = express();

middleware = require('./middleware.js');

todos = [
  {
    description: "Bring milk from dairy",
    completed: "No",
    critical: "no"
  },
  {
    description: "Install Linux on Laptop",
    completed: "Yes",
    critical: "no"
  }
];

app.get('/', middleware.logger, middleware.loginRequired, function(req, res){
res.send('Hello World');
});

app.get('/todos', function(req, res, next){
  res.json(todos);
  next();
});

app.listen(3000, function(){
console.log('Server started on port 3000');
});

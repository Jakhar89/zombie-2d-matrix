const express = require('express');
var bodyParser = require('body-parser');

var tasks = require('./routes/main');

var path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/call', tasks);

app.use('/',express.static('public'));
  
// app.get('*', function(req, res) {
//     res.sendFile(path.resolve(__dirname,'public','index.html'));
//   })

const port = process.env.PORT ||7000;



app.listen(port, () => console.log(`Server running on port ${port}`));
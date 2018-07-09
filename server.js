const express = require('express');
const path = require('path');
const app = express();

var {mongoose} = require('./db/mongoose');
var {Message} = require('./models/message');

const port = process.env.PORT || 5000;

// API calls
app.get('/api/hello', (req, res) => {
  var mesg = new Message({
    name: 'comming from mongo db' 
  });
  
    mesg.save().then((doc) => {
      res.send({ express: `Hello From Express ${doc.name} id object ${doc.id}` });
    }).catch((e) => {
      res.send({ express: `Hello From Express DB Error` });
    }
  )
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
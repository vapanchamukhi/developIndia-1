// //Install express server
// const express = require('express');
// const path = require('path');
 
// const app = express();
 
// // Serve only the static files form the angularapp directory
// app.use(express.static(__dirname + '/develop-india2'));
 
// app.get('/*', function(req,res) {
 
// res.sendFile(path.join(__dirname+'/develop-india2/index.html'));
// });
 
// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/develop-india'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/develop-india/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
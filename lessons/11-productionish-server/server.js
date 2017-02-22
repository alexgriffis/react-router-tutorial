var express = require('express')
var path = require('path')

var app = express()
var compression = require('compression')

// must be first!
app.use(compression())

// serve static files
app.use(express.static(path.join(__dirname, 'public')))

// send all request to index.html so browserHistory of React Router works
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Server running on localhsot:' + PORT)
})

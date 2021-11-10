var express = require('express');
var app = express();
const PORT = 3000;

app.get('/', async function(req, res){
    res.json('Hello');
})

app.get("/api/getName", async function(request, response){
    response.json('Florian')
});

app.get('/error', function (req, res){
    res.status(202)
    res.send("nope...")
})



app.listen(PORT, function() {
  console.log(`Running on ${PORT}`);
});
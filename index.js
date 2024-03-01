const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.set("Content-Type", "text/html");
    const indexPath = path.join(__dirname, 'static/html/index.html');
    res.sendFile(indexPath);
});

app.post('/submit', (req, res) => {
    // Now you can access form data using req.body
    const username = req.body.name; // Use "name" as it matches the input's "name" attribute
    const description = req.body.ta;
    const date = req.body.date;
    const amount = req.body.amt;

    res.send(`Submitted data: Name - ${username}, Description - ${description}, Date - ${date}, Amount - ${amount}`);
});

app.get('/hello', (req, res) => {
    res.send("Prakash");
});

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
});

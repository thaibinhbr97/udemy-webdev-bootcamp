const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there, ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Steve Chick')
    res.cookie('animal', 'Harlequin Shrimp')
    res.send('OK SENT YOU A COOKIE!!!');
})

app.listen(3000, () => {
    console.log("SERVING!");
});

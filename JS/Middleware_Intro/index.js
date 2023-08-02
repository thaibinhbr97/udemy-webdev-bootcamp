const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.use((req, res, next) => {
    console.log("FIRST MIDDLEWARE");
    return next();
})
app.use((req, res, next) => {
    console.log("SECOND MIDDLEWARE");
    return next();
})
app.use((req, res, next) => {
    console.log("THIRD MIDDLEWARE");
    return next();
})

app.get('/', (req, res) => {
    res.send('HOME PAGE!');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!');
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
})
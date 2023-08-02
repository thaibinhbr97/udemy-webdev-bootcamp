const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

// app.use((req, res, next) => {
//     console.log("FIRST MIDDLEWARE");
//     return next();
// })
// app.use((req, res, next) => {
//     console.log("SECOND MIDDLEWARE");
//     return next();
// })
// app.use((req, res, next) => {
//     console.log("THIRD MIDDLEWARE");
//     return next();
// })

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE!');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!');
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
})
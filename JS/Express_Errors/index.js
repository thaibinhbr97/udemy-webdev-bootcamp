const express = require('express');
const morgan = require('morgan');
const app = express();

const AppError = require('./AppError')

app.use(morgan('dev'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOGS!!!')
    next();
})

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    throw new AppError('Password Required!', 401);
    // res.send('SORRY! YOU NEED A PASSWORD!!!')
    // throw new AppError(401, 'Password required!')
})

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE!');
})

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})

app.get('/admin', (req, res) => {
    throw new AppError('Your are not an Admin!', 403);
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!');
})

// app.use((err, req, res, next) => {
//     console.log("***************************************")
//     console.log("****************ERROR******************")
//     console.log("***************************************")
//     console.log(err)
//     next(err)
//     // res.status(500).send("OH BOY! WE GOT AN ERROR!")
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong!' } = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
})
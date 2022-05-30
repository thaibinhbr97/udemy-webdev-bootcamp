const { text } = require('express');
const express = require('express');
const { all } = require('express/lib/application');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')
uuid();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I love chicken'
    },
    {
        id: uuid(),
        username: 'l0ve',
        comment: 'I love my gf'
    },
    {
        id: uuid(),
        username: 'h4nn3y',
        comment: 'Oh yeah baby'
    }
]

app.get('/comments', (req, res) => {
    res.render("comments/index", { comments })
})

app.get('/comments/new', (req, res) => {
    res.render("comments/new");
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect("/comments")
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log('ON PORT 3000!');
})

// username
// text

// bob - hello!

// GET /comments - list all comments
// POST /comments - create a new comment
// GET /comments/:id - get one comment using id
// PATCH /comments/:id - update one comment
// DELETE /comments/:id - remove/destroy one comment



const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!")
//     res.send("HELLO, WE GOT YOUR REQUEST! THIS IS OUR RESPONSE")
// })

app.get('/', (req, res) => {
    res.send("This is the homepage!")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send("POST REQUEST TO /cats!!! THIS IS DIFFERENT FROM A GET REQUEST")
})

app.get('/cats', (req, res) => {
    res.send("MEOW!!")
    // console.log("CAT REQUEST!!!")
})

app.get('/dogs', (req, res) => {
    res.send("WOOF!!")
})

app.get('/search', (req, res) => {
    const { q } = req.query
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED')
    }
    res.send(`<h1>Search result for ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send("I don't know that path")
})

// cats => 'meow'
// dogs => 'woof'
// '/'

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})
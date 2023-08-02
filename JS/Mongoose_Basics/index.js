const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO! ERROR!")
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
// amadeus.save()

Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
    .then(data => {
        console.log("IT WORKED!");
        console.log(data);
    })

// Running in node in the terminal

// Movie.find({}).then(data => console.log(data))

// Movie.find({ rating: 'PG-13' }).then(data => console.log(data))

// Movie.find({ year: { $gte: 2015 } }).then(data => console.log(data))

// Movie.find({ year: { $gte: 2010 } }).then(data => console.log(data))

// Movie.find({ year: { $lt: 1990 } }).then(data => console.log(data))

// Movie.find({ year: { $lt: 1990 } }).then(data => console.log(data))

// Movie.findOne({ year: { $lt: 1990 } }).then(data => console.log(data))

// Movie.findOne({}).then(m => console.log(m))

// Movie.findById('64c2d37ae9618cc9c7599408').then(m => console.log(m))

// Movie.updateOne({ title: 'Amadeus' }, { year: 1984 }).then(res => console.log(res))

// Movie.updateMany({ title: { $in: ['Amadeus', 'Stand By Me'] } }, { score: 10 }).then(res => console.log(res))

// Movie.findOneAndUpdate({ title: 'The Iron Giant' }, { score: 7.0 }).then(m => console.log(m))

// Movie.findOneAndUpdate({ title: 'The Iron Giant' }, { score: 7.5 }, { new: true }).then(m => console.log(m))

// Movie.deleteOne({ title: 'Amelie' }).then(m => console.log(m))

// Movie.deleteMany({ year: { $gte: 1999 } }).then(m => console.log(m))

// Movie.findOneAndDelete({ title: 'Alien' }).then(msg => console.log(msg))

// Movie.findOneAndDelete({ title: 'Stand By Me' }).then(msg => console.log(msg))
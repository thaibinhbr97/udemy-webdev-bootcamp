const mongoose = require('mongoose');
const cities = require('./cities.js');
const { places, descriptors } = require('./seedHelpers.js');
const Campground = require('../models/campground.js');

mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            author: '64f8a61a7730b3894b5b10f2',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/20431456',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, ipsam sunt vero commodi alias reiciendis praesentium aspernatur, impedit reprehenderit natus voluptates beatae quis nemo, voluptate cumque illum possimus sed fugiat?',
            price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
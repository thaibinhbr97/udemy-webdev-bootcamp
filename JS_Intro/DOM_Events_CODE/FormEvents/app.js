

// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }

const form = document.querySelector('#tweetForm');
const username = document.querySelector('#username');
const tweet = document.querySelector('#tweets')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const userName = username.value;
    const newLi = document.createElement('li');
    newLi.innerText = userName;
    tweet.append(newLi);
    username.value = '';
})

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
// const form = document.querySelector('form');
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const product = document.querySelector('#product');
//     const quantity = document.querySelector('#qty');
//     const newLi = document.createElement('li');
//     newLi.innerText = `${quantity.value} ${product.value}`;
//     document.querySelector('#list').appendChild(newLi);
//     product.value = '';
//     quantity.value = '';
// });
// Immediately export a function that generates a string of random numbers and letters
// Received this line of code from Module 11 Activity 26 of UCB Gitlab assignment
module.exports = () =>
    Math.floor((1 + Math.random()) * 0x10000)
        .toString(6)
        .substring(1);
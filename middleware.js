middleware = {
logger: function (req, res, next) {
console.log('Hello');
next()
},
loginRequired: function () {
console.log('Private');
}
};

module.exports = middleware;

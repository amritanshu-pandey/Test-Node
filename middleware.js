middleware = {
logger: function (req, res, next) {
console.log('Hello');
next()
},
loginRequired: function (req, res, next) {
console.log('Private');
next();
}
};

module.exports = middleware;

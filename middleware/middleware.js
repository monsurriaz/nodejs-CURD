module.exports.first = (req, res, next) => {
    console.log('first middleware');
    next();
}

module.exports.second = (req, res, next) => {
    console.log('second middleware');
    next();
}

module.exports.third = (req, res, next) => {
    console.log('Third middleware');
    res.send('Done');
}
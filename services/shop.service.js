const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}

module.exports.get = shop => {
    return Shop.find(shop);
}

module.exports.get = shop => {
    return Shop.findById(shop);
}

// module.exports.get = shop => {
//     return Shop.findOne(shop);
// }

// module.exports.put = shop => {
//     return Shop.findByIdAndUpdate(shop);
// }
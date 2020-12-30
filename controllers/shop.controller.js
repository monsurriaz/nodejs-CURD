const shopService = require('../services/shop.service');

//async, await method
module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
};

module.exports.get = async (req, res, next) => {
    try {
        const shop = await shopService.get(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'})
    }
};

module.exports.get = async (req, res, next) => {
    try {
        const shop = await shopService.get(req.params.id);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'})
    }
};

// module.exports.get = async (req, res, next) => {
//     try {
//         const shop = await shopService.get(req.params.name);
//         return res.status(200).json(shop);
//     } catch (e) {
//         console.error(e);
//         return res.status(500).json({ message: 'Something went wrong'})
//     }
// };

// module.exports.put = async (req, res, next) => {
//     try {
//         const shop = await shopService.put(req.params.id);
//         return res.status(200).json(shop);
//     } catch (e) {
//         console.error(e);
//         return res.status(500).json({ message: 'Something went wrong'})
//     }
// };


//.then (call back) method
// module.exports.create = (req, res, next) => {
//     shopService.create(req.body)
//     .then((err, data) => {
//         if(err) {
//             console.error(e);
//             return res.status(500).json({ message: 'Something went wrong'});
//         } else {
//             return res.status(200).json(data);
//         }
//     })
// }
const Product = require('../models/product');
const util = require('../../util/mongoose');
class ProductsController {
    // [GET] /
    async index(req, res, next) {
        // res.render('home');
        Product.find({})
            .then((products) => {
                //products = products.map((product) => product.toObject());
                products = util.multipleMongooseToObject(products);
                // console.log(products);
                res.render('home', { products });
            })
            .catch(next);
        // try {
        //     const products = await Product.find({});
        //     products = await products.map((product) => product.toObject());

        //      res.render('home', { products });
        // } catch (error) {
        //     res.status(400).json({ error: 'Fail to get Product' });
        // }
    }
    // [GET] /about
    about(req, res) {
        res.render();
    }
}

module.exports = new ProductsController();

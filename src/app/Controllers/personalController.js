const Product = require('../models/product');
const util = require('../../util/mongoose');
class ProductsController {
    // [GET] /personal/manage
    async listProducts(req, res, next) {
        try {
            const lProduct = await util.multipleMongooseToObject(
                await Product.find({})
            );
            const trashCount = await Product.countDocumentsWithDeleted({
                deleted: true,
            });
            console.log(trashCount);
            res.render('product/manageProducts', { lProduct, trashCount });
        } catch (e) {
            next(e);
        }
        // const trashCount = await Product.countDocumentsDeleted();
        // Product.find({})
        //     .then((lProduct) => {
        //         //products = products.map((product) => product.toObject());
        //         lProduct = util.multipleMongooseToObject(lProduct);

        //         // console.log(products);
        //         res.render('product/manageProducts', { lProduct, trashCount });
        //     })
        //     .catch(next);
    }
    async deletedProducts(req, res, next) {
        Product.findWithDeleted({ deleted: true })
            .then((lProduct) => {
                //products = products.map((product) => product.toObject());
                lProduct = util.multipleMongooseToObject(lProduct);

                // console.log(products);
                res.render('product/deletedProducts', { lProduct });
            })
            .catch(next);
    }
    // [GET] /personal/:id/edit
    editProduct(req, res, next) {
        Product.findOne({ _id: req.params.id })
            .then((product) => {
                // console.log(util.mongooseToObject(product));
                res.render('product/editProduct', {
                    product: util.mongooseToObject(product),
                });
            })
            .catch(next);
    }
}

module.exports = new ProductsController();

const Product = require('../models/product');
const { mongooseToObject } = require('../../util/mongoose');

class ProductsController {
    // [GET] /products
    index(req, res) {
        res.send('Product default');
    }
    // [GET] /products/:slug
    detail(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then((product) => {
                product = mongooseToObject(product);
                res.render('product/product-detail', { product });
            })
            .catch(next);
    }
    // [GET] /products/create
    create(req, res, next) {
        res.render('product/createProduct');
    }

    // [POST] /products/store
    store(req, res, next) {
        const product = new Product(req.body);
        product.save().then(() => res.redirect('/'));
    }
    // [PUT] /products/:id
    updateProduct(req, res, next) {
        Product.findByIdAndUpdate(req.params.id, req.body)
            .then(() => res.redirect('/personal/stored/manage'))
            .catch(next);
    }
    // [PATCH] /products/:id/restore
    restoreProduct(req, res, next) {
        Product.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [DELETE] /products/:id
    deleteProduct(req, res, next) {
        Product.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [DELETE] /products/:id/force
    forceDeleteProduct(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [POST] /products/multiple-product-action
    multipleProductAction(req, res, next) {
        switch (req.body.actions) {
            case 'delete':
                Product.delete({ _id: { $in: req.body.checkItem } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'forceDelete':
                Product.deleteOne({ _id: { $in: req.body.checkItem } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'restore':
                Product.restore({ _id: { $in: req.body.checkItem } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ error: 'Invalid request' });
                break;
        }
    }
}

module.exports = new ProductsController();

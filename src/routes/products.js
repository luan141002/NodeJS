const express = require('express');
const router = express.Router();

const productsController = require('../app/Controllers/ProductsController');

// cấu hình route ra riêng để chia ra thành những phần riêng

// cấu hình cho route product
router.get('/create', productsController.create);
router.post('/store', productsController.store);
router.post('/multiple-product-action', productsController.multipleProductAction);
router.put('/:id', productsController.updateProduct);
router.patch('/:id/restore', productsController.restoreProduct);
router.delete('/:id', productsController.deleteProduct);
router.delete('/:id/force', productsController.forceDeleteProduct);
router.get('/:slug', productsController.detail);

module.exports = router;

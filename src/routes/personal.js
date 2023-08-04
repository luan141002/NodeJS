const express = require('express');
const router = express.Router();

const personalController = require('../app/Controllers/personalController');

// cấu hình route ra riêng để chia ra thành những phần riêng

// cấu hình cho route product
router.get('/stored/manage', personalController.listProducts);
router.get('/trash/products', personalController.deletedProducts);

router.get('/:id/edit', personalController.editProduct);

module.exports = router;

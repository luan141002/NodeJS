const express = require('express');
const router = express.Router();

const siteController = require('../app/Controllers/SiteController');

// cấu hình route ra riêng để chia ra thành những phần riêng

router.get('/about', siteController.about);
router.get('/', siteController.index);

module.exports = router;

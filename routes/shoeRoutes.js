const express = require('express');
const router = express.Router();
const shoeController = require('../controllers/shoeController');

router.get('/', shoeController.getAllShoes);
router.get('/add', shoeController.getAddShoe);
router.post('/add', shoeController.postAddShoe);
router.get('/edit/:id', shoeController.getEditShoe);
router.post('/edit/:id', shoeController.postEditShoe);
router.post('/delete/:id', shoeController.deleteShoe);

module.exports = router;

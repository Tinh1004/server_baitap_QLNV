var express = require('express');
var router = express.Router();
const BaiTapController = require('../controllers/baitap.controller')


/* bai tap 1 */
router.get('/1', BaiTapController.baitap1);

/* bai tap 2*/
router.get('/2', BaiTapController.baitap2);

/* bai tap 3 */
router.get('/3', BaiTapController.baitap3);

/* bai tap 4 */
router.get('/4', BaiTapController.baitap4);

/* bai tap 5*/
router.get('/5', BaiTapController.baitap5);

/* bai tap 6 */
router.get('/6', BaiTapController.baitap6);

/* bai tap 7 */
router.get('/7', BaiTapController.baitap7);

/* bai tap 8 */
router.get('/8', BaiTapController.baitap8);

/* bai tap 9 */
router.get('/9', BaiTapController.baitap9);

/* bai tap 10 */
router.get('/10', BaiTapController.baitap10);

/* bai tap 11 */
router.get('/11', BaiTapController.baitap11);

/* bai tap 12 */
router.get('/12', BaiTapController.baitap12);

module.exports = router;

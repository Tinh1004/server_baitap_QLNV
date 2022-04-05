var express = require('express');
var router = express.Router();
const NVController = require('../controllers/NV.controller')


/* GET NVs. */
router.get('/', NVController.getNVs);

/* GET NV. */
router.get('/:id', NVController.getNVbyId);

/* Post create. */
router.post('/create', NVController.createNV);

/* Post create. */
router.patch('/update/:id', NVController.updateNVById);

/* Post create. */
router.delete('/delete/:id', NVController.deleteNVById);

module.exports = router;

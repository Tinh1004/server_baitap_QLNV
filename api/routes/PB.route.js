var express = require('express');
var router = express.Router();
const PBController = require('../controllers/PB.controller')


/* GET PBs. */
router.get('/', PBController.getPBs);

/* GET PB. */
router.get('/:id', PBController.getPBbyId);

/* Post create. */
router.post('/create', PBController.createPB);

/* Post create. */
router.patch('/update/:id', PBController.updatePBById);

/* Post create. */
router.delete('/delete/:id', PBController.deletePBById);

module.exports = router;

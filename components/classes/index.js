const express = require('express');
const router = express.Router();
const classesControler = require('./classesControler.js')

/* GET users listing. */
router.get('/', classesControler.list)
router.get('/:id', classesControler.detail)
router.post('/',classesControler.add)
module.exports = router;

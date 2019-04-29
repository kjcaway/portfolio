const express = require('express');
const member = require('./member');

const router = express.Router();

router.get('/', (req, res) => res.json({data:'this is index.'}));
router.use('/member', member);

module.exports = router
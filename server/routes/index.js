const express = require('express');
const member = require('./member');
const contents = require('./contents');

const router = express.Router();

router.get('/', (req, res) => res.json({data:'this is index.'}));
router.use('/member', member);
router.use('/contents', contents);

module.exports = router
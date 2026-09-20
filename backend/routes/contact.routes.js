const express = require('express');
const { createInquiry, subscribe } = require('../controllers/contact.controller');
const { validateJsonBody } = require('../middleware/validateRequest');

const router = express.Router();

router.post('/inquiries', validateJsonBody, createInquiry);
router.post('/newsletter', validateJsonBody, subscribe);

module.exports = router;

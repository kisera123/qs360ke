const express = require('express');

const router = express.Router();

router.get('/', (_request, response) => {
  response.json({ status: 'ok', service: 'qs360ke-api', timestamp: new Date().toISOString() });
});

module.exports = router;

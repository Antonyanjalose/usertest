const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 + num2;
  res.json({ result });
});

module.exports = router;

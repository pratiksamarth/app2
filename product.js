const express = require('express');
const router = express.Router();


router.post('/product', (request, response) => {
        response.send(utils.createResponse(error, products));
});

module.exports = router;
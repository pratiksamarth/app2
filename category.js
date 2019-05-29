const express = require('express');
const router = express.Router();


router.get('/category', (request, response) => {
        response.send('categoty list');
});

module.exports = router;
const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.getAllposts);
router.get('/:id', controller.getPostById);
router.post('/', controller.createPost);

module.exports = router;
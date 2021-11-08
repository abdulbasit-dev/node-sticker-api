const express = require('express');
const router = express.Router();

const {
  index,
  show,
  store,
  update,
  destroy,
} = require('../controllers/stickerController');

router.get('/', index)
router.get('/:sticker_id', show)
router.post('/', store)
router.put('/:sticker_id', update)
router.delete('/:sticker_id', destroy)

module.exports = router;

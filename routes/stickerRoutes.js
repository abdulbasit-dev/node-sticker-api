const express = require('express');
const router = express.Router();

const {
  index,
  show,
  store,
  update,
  destroy,
} = require('../controllers/stickerController');

router.get('', index)
router.get('', show)
router.post('', store)
router.put('', update)
router.delete('', destroy)

module.exports = router;

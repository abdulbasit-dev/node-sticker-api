const db = require('../database/conection');

const index = async(req, res) => {
  const stickers = await db('stickers');

  return res.status(200).json({
    result:true,
    status:200,
    message:"All stickers",
    total:stickers.length,
    data:stickers
  });
};

const show = async(req, res) => {
  const sticker = await db('stickers').where('id',req.params.sticker_id)

  if(!sticker.length){
    return res.status(404).json({
      result:false,
      status:404,
      message:"Object not found",
    });
  }
  return res.json(sticker[0]);
};

const store = async(req, res) => {
  await db('stickers').insert({
  })
  return res.json([]);
};

const update = async(req, res) => {
  return res.json([]);
};

const destroy = async(req, res) => {
  return res.json([]);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};

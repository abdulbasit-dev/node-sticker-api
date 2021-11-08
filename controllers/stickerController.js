const db = require('../database/conection');

const index = (req, res) => {
  return req.json(["sd"]);
};
const show = (req, res) => {
  return req.json([]);
};
const store = (req, res) => {
  return req.json([]);
};
const update = (req, res) => {
  return req.json([]);
};
const destroy = (req, res) => {
  return req.json([]);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};

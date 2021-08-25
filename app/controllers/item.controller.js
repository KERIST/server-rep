const { Op } = require("sequelize");
const db = require("../models");
const Item = db.item;

const getAllItems = (req, res) => {
  Item.findAll()
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => res.status(400).send({ message: error.message }));
};

const getItems = (req, res) => {
  const {
    params: { name },
  } = req.body;

  Item.findAll({
    where: {
      name: {
        [Op.like]: name,
      },
    },
  })
    .then((item) => {
      res.status(200).send(item);
    })
    .catch((error) => res.status(400).send({ message: error.message }));
};

const addItems = (req, res) => {
  const { items } = res.body;

  Item.create(items)
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => res.status(400).send({ message: error.message }));
};

module.exports = {
  getAllItems,
  getItems,
  addItems,
};

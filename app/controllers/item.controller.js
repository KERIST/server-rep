const { handleDefault } = require("../utils/errorHandlers");
const { Op } = require("sequelize");
const db = require("../models");
const Item = db.item;

const getAllItems = async (req, res) => {
  let items;

  try {
    items = await Item.findAll();
  } catch (err) {
    return handleDefault(err, res);
  }

  res.status(200).send(items);
};

const getItems = async (req, res) => {
  let items;

  try {
    items = await Item.findAll({
      where: {
        name: {
          [Op.like]: req.body.params.name,
        },
      },
    });
  } catch (err) {
    return handleDefault(err, res);
  }

  res.status(200).send(items);
};

const addItems = async (req, res) => {
  const { items } = req.body;
  let dbRequstResult;

  try {
    dbRequstResult = await Item.create(items);
  } catch (err) {
    return handleDefault(err, res);
  }

  res.status(200).send(dbRequstResult);
};

module.exports = {
  getAllItems,
  getItems,
  addItems,
};

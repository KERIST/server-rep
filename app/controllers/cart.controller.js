const { handleDefault } = require("../utils/errorHandlers");
const { Item, Login } = require("../models");

const addItemToCart = async (req, res) => {
  try {
    const item = await Item.findByPk(req.body.itemId);
    const login = await Login.findByPk(req.loginId);

    login.addItem(item);
  } catch (err) {
    return handleDefault(err, res);
  }

  res.status(200).send();
};

const getCartItems = async (req, res) => {
  let items;

  try {
    const login = await Login.findByPk(req.loginId);
    items = login.getItems();
  } catch (err) {
    return handleDefault(err, res);
  }

  res.status(200).send(items);
};

module.exports = {
  addItemToCart,
  getCartItems,
};

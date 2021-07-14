const db = require("../models");
const Item = db.item;

const getItems = (req, res) => {
  Item.findAll()
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => res.status(400).send({ message: error.message }));
};

module.exports = {
  getItems,
};

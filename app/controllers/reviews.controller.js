const { handleDefault } = require("../utils/errorHandlers");
const { Review, Item, User } = require("../models");

const getReviewsByItem = async (req, res) => {
  let reviews;

  try {
    reviews = await Review.findAll({
      where: {
        ItemId: req.body.itemId,
      },
    });
  } catch (err) {
    return handleDefault(err, res);
  }

  res.status(200).send(reviews);
};

const getReviewsByUser = async (req, res) => {
  let reviews;

  try {
    reviews = await Review.findAll({
      where: {
        UserId: req.body.userId,
      },
    });
  } catch (err) {
    return handleDefault(err, res);
  }

  res.status(200).send(reviews);
};

const addReview = async (req, res) => {
  let review;

  try {
    reivew = await Review.create(item);
    const item = Item.findByPk(req.body.itemId);
    const user = User.findByPk(req.body.userId);
    user.SetReview(dbRequstResult);
    item.setReview(dbRequstResult);

  } catch (err) {
    return handleDefault(err, res);
  }

  res.status(200).send(review);
};

module.exports = {
  getReviewsByItem,
  getReviewsByUser,
  addReview,
};

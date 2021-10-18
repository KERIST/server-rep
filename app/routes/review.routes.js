const { authJwt } = require("../middleware");
const controller = require("../controllers/reviews.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.get(
    "/api/review/byitem",
    controller.getReviewsByItem,
  );

  app.get(
    "/api/review/byuser",
    [authJwt.verifyToken],
    controller.getReviewsByUser,
  );

  app.put(
    "/api/review",
    [authJwt.verifyToken],
    controller.addReview,
  );
};

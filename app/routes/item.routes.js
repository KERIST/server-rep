const { authJwt } = require("../middleware");
const controller = require("../controllers/item.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/items/all", controller.getAllItems);
  app.put("/api/items", [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], controller.addItems);
  app.put("/api/items", [authJwt.verifyToken], controller.addItems);
  app.get("/api/items", controller.getItems);
};

const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controllers");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/user", controller.getUserByEmail);
  app.put("/api/user", [authJwt.verifyToken], controller.updateUserPassword);
};

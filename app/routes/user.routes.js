const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/v1/api/test/all", controller.allAccess);

  app.get(
    "/v1/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

};
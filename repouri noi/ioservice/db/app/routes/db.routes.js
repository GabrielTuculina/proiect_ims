const { authJwt } = require("../middlewares");
const controller = require("../controllers/db.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/db/test/getCrawl", [authJwt.verifyToken], controller.get_crawls_history_user);

    app.post("/db/test/addCrawl", [authJwt.verifyToken], controller.post_crawl_user);
};
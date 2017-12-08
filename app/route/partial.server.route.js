module.exports = function(app) {
  const partial = require("../controller/partial.server.controller");
  app.get("/client/:module/view/:partial", partial.render);
};

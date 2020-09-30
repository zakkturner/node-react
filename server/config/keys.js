if (process.env.NODE_ENV === "production") {
  // in prod return prod keys
  module.exports = require("./prod");
} else {
  //in dev return dev keys
  module.exports = require("./dev");
}

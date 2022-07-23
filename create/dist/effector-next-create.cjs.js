'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./effector-next-create.cjs.prod.js");
} else {
  module.exports = require("./effector-next-create.cjs.dev.js");
}

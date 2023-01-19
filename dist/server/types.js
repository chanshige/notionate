"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _apiEndpoints = require("@notionhq/client/build/src/api-endpoints");
Object.keys(_apiEndpoints).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _apiEndpoints[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _apiEndpoints[key];
    }
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "i18next", {
  enumerable: true,
  get: function get() {
    return _i18next.default;
  }
});
exports.useTrans = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _i18nextHttpBackend = _interopRequireDefault(require("i18next-http-backend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useTrans = ns => {
  const {
    t
  } = (0, _reactI18next.useTranslation)(ns);
  return t;
};

exports.useTrans = useTrans;

_i18next.default.use(_i18nextHttpBackend.default).use(_reactI18next.initReactI18next).init({
  lng: "en-US",
  backend: {
    loadPath: function loadPath(lng, ns) {
      // return pathResolver[ns]
      //   ? "/locales/" + pathResolver[ns] + "/{{lng}}/{{ns}}.json"
      //   : "/locales/{{lng}}/{{ns}}.json";
      return "/locales/{{lng}}/{{ns}}.json";
    }
  },
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false
  },
  debug: true
});
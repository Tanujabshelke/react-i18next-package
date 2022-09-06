import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation, Trans } from "react-i18next";
import Backend from "i18next-http-backend";

const useTrans = (ns) => {
  const { t } = useTranslation(ns);
  return t;
};

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en-US",
    backend: {
      loadPath: function (lng, ns) {
        // return pathResolver[ns]
        //   ? "/locales/" + pathResolver[ns] + "/{{lng}}/{{ns}}.json"
        //   : "/locales/{{lng}}/{{ns}}.json";
        return "/locales/{{lng}}/{{ns}}.json";
      },
    },
    fallbackLng: "en-US",
    interpolation: { escapeValue: false },
    debug: true,
  });

export { useTrans, i18next };

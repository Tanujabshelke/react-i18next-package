import "./App.css";
import { useTrans, i18next } from "./lib/Components/ReactI18n";

function Test() {
  const t = useTrans(["header"]);

  const handleChange = (e) => {
    let lang = e.target.value;
    i18next.changeLanguage(lang);
  };
  return (
    <div className="App">
      <h1>Npm Package of react-i18n</h1>
      <section className="container">
        <h4>{t("change_language")}</h4>
        <div className="btn-container">
          <button className="btn" value="en-US" onClick={handleChange}>
            {t("Eng")}
          </button>
          <button className="btn" value="ja-JP" onClick={handleChange}>
            {t("Jp")}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Test;

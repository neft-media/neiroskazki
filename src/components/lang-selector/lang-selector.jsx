import clsx from "clsx";

import styles from "./lang-selector.module.css";

function LangSelector({lang1, lang2, rus, toggleLang}) {

  return (
    <div className={clsx(styles.lang_wrapper)}>
      <button className={clsx(rus && styles.active, styles.lang, styles.lang1)} onClick={toggleLang}>{lang1}</button>
      <button className={clsx(!rus && styles.active, styles.lang, styles.lang2)} onClick={toggleLang}>{lang2}</button>
    </div>
  );
}

export default LangSelector;

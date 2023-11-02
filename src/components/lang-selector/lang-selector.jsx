import clsx from "clsx";

import styles from "./lang-selector.module.css";

function LangSelector({lang1, lang2, active, toggleLang}) {

  return (
    <div className={clsx(styles.lang_wrapper)}>
      <button className={clsx(active==lang1 && styles.active, styles.lang, styles.lang1)} onClick={toggleLang}>{lang1}</button>
      <button className={clsx(active==lang2 && styles.active, styles.lang, styles.lang2)} onClick={toggleLang}>{lang2}</button>
    </div>
  );
}

export default LangSelector;

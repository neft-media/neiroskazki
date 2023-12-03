import clsx from 'clsx';

import styles from './to-main-page-button.module.css';

import { Link } from 'react-router-dom';

function ToMainPageButton({highlightedText, term, definition}) {

  return (
    <div className={clsx(styles.container, "mt-12", "mb-12")}>
      <Link className={styles.button} to="/">На главную</Link>
    </div>
  );
}

export default ToMainPageButton;

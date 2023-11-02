import clsx from "clsx";
import { Link } from "react-router-dom";

import { GiBookCover } from "react-icons/gi";
import { BiSolidChevronLeftCircle } from "react-icons/bi";
import { BiSolidChevronRightCircle } from "react-icons/bi";

import styles from "./tale-menu.module.css"
function TaleMenu() {
  return (
    <>
      <div className={clsx(styles.menu)}>
        <a href="#" className={clsx(styles.link)}>
          <BiSolidChevronLeftCircle size="25" />
          <span>Предыдущая сказка</span>
        </a>

        <Link to="/" className={clsx(styles.link)}>
          <GiBookCover size="25" />
          <span>Список</span>
        </Link>

        <a href="#" className={clsx(styles.link)}>
          <span>Следующая сказка</span>
          <BiSolidChevronRightCircle size="25" />
        </a>

      </div>
    </>
  );
}

export default TaleMenu;

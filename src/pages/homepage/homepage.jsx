import { Link } from "react-router-dom";

import clsx from "clsx";

import Book from "../../components/book/book";

import booksList from "../../books-list";

import styles from "./homepage.module.css";

import singlePattern1 from '../../images/rus/single-pattern-rus-1.svg';
import singlePattern2 from '../../images/rus/single-pattern-rus-2.svg';

function Homepage() {
  return (
    <>
      <div
        className={clsx("bg-patterns")}
        style={{
          backgroundImage: `url(${singlePattern1}), url(${singlePattern2})`,
        }}
      ></div>

      <h1 className={clsx(styles.title, "mt-12")}>Нейросказки</h1>

      <p className={clsx(styles.intro, "mt-12")}>
        NEFT представляет проект &laquo;Нейросказки&raquo;.
        <br />
        Мы&nbsp;отобрали истории, на&nbsp;которых росли предки разных жителей
        ХМАО, и&nbsp;проиллюстрировали их&nbsp;с&nbsp;помощью нейросети. Так
        у&nbsp;нас получился сборник, одновременно обращенный к&nbsp;корням
        и&nbsp;в&nbsp;будущее. Предлагаем взрослым и&nbsp;маленьким югорчанам
        чуть больше узнать культуру соседей и&nbsp;открыть для себя что-то
        новое.
      </p>

      <p className={clsx(styles.intro)}>
        Приятного чтения!
      </p>

      <div className={clsx(styles.shelf, "mt-12")}>
        {booksList.map((book) => (
          <Book key={book.id} book={book} />
        ))}

      </div>

    </>
  );
}

export default Homepage;

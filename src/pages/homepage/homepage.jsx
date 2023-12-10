import { useState, useEffect } from "react";

import clsx from "clsx";

import Book from "../../components/book/book";
import BookGallery from "../../components/book-gallery/book-gallery";

import booksList from "../../books-list";

import styles from "./homepage.module.css";

import singlePattern1 from '../../images/rus/single-pattern-rus-1.svg';
import singlePattern2 from '../../images/rus/single-pattern-rus-2.svg';

const mobileBreakpoint = 700;
const OPTIONS = { loop: true, align: 'center' }

function Homepage() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={clsx("bg-patterns")}
        style={{
          backgroundImage: `url(${singlePattern1}), url(${singlePattern2})`,
        }}
      ></div>

      <h1 className={clsx(styles.title, "pt-12")}>Нейросказки</h1>

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

      {
        windowWidth < mobileBreakpoint
          ?
            <div className={clsx(styles.shelf, "mt-12")}>
              {booksList.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </div>
          :
            <BookGallery books={booksList} options={OPTIONS} />
      }


      <div className="footer-spacer">&nbsp;</div>

    </>
  );
}

export default Homepage;

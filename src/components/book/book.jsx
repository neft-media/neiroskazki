// import { useState } from 'react';

import { Link } from "react-router-dom";

import clsx from 'clsx';

import styles from "./book.module.css";


function Book({book}) {

  return (
    <Link to={book.link} className={styles.link} style={book.styles}>
      <img className={styles.cover} src={book.cover} />
      <div className={styles.book}>
        <div className={styles.root}></div>
        <div className={styles.face}>
          <img className={styles.shape} src={book.pattern} />
          <h3 className={styles.title}>{book.nation}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Book;

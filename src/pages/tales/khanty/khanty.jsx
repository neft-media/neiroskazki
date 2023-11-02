import React from 'react';
import clsx from 'clsx';

import TaleMenu from '../../../components/tale-menu/tale-menu';
import LangSelector from '../../../components/lang-selector/lang-selector';

import styles from "./khanty.module.css";
import patternKhanty from '../../../images/pattern-khanty.svg';

import { tale_1_rus, tale_1_khanty } from "../../../tales/khanty";


function Khanty() {

  const lang1 = "РУС";
  const lang2 = "ХАНТ";

  const [tale1Lang, setTale1Lang] = React.useState(lang1);

  const toggleTale1Lang = () => {
    setTale1Lang(tale1Lang === lang1 ? lang2 : lang1);
  };

  let tale1 = tale_1_rus;

  if (tale1Lang === lang2) {
    tale1 = tale_1_khanty;
  }

  return (
    <>
      <div className={clsx("page")}>
        <p className='main_title'>Нейросказки</p>
        <TaleMenu />
        <h1 className={clsx(styles.clr_1, "mt-8")}>Хантыйские сказки</h1>
        <p className={clsx("intro_text")}>
        Название Ханты-Мансийского автономного округа составлено из&nbsp;названий двух коренных народов
        этих мест&nbsp;&mdash; ханты и&nbsp;манси. Поэтому мы&nbsp;начинаем проект &laquo;Нейросказки&raquo;
        именно с&nbsp;хантыйского фольклора. Представленные здесь
        сказки <a href="https://clck.ru/36Ks8p">собрали и&nbsp;перевели</a> сотрудники Обско-Угорского института
        прикладных исследований и&nbsp;разработок.
        </p>
        <ul className={clsx("contents")}>
          <li className={clsx("contents_item", styles.clr_1)}>
            <a className={clsx("contents_link")} href="#">
              <h3>01</h3>
              <h3 className={clsx("contents_item_right")}>Как кот и&nbsp;белка жили</h3>
            </a>
          </li>
          <li className={clsx("contents_item", styles.clr_2)}>
            <a className={clsx("contents_link")} href="#">
              <h3>02</h3>
              <h3 className={clsx("contents_item_right")}>Как появились комары</h3>
            </a>
          </li>
          <li className={clsx("contents_item", styles.clr_3)}>
            <a className={clsx("contents_link")} href="#">
              <h3>03</h3>
              <h3 className={clsx("contents_item_right")}>Почему совы на мышей охотятся</h3>
            </a>
          </li>
        </ul>

        <div className={clsx("pattern_wrapper")}>
          <div style={{ backgroundImage: `url(${patternKhanty})` }} className={clsx("pattern")}></div>
        </div>


        <LangSelector lang1={lang1} lang2={lang2} active={tale1Lang} toggleLang={toggleTale1Lang}/>

        <div className={clsx("tale")}>
          <h2 className={clsx(styles.clr_1)}>{tale1.title}</h2>
          <p>{tale1.content[0]}</p>
        </div>
      </div>
    </>
  );
}

export default Khanty;


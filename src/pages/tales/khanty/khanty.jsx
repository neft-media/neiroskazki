import React from 'react';
import clsx from 'clsx';

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

import { Burger } from '@mantine/core';

import LangSelector from '../../../components/lang-selector/lang-selector';

import styles from "./khanty.module.css";
import patternKhanty from '../../../images/pattern-khanty.svg';

import { tale_1_rus, tale_1_khanty } from "../../../tales/khanty";


function Khanty() {

  const [menuOpened, menuHandlers] = useDisclosure(false);


  // Селекторы языка
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

        {/* <Button onClick={open}>Open Drawer</Button> */}
        <Burger className={clsx("burger-button")} opened={menuOpened} onClick={menuHandlers.toggle} aria-label="Toggle navigation" />

        <Drawer
          position="right"
          // withCloseButton={false}
          opened={menuOpened}
          onClose={menuHandlers.toggle}
          transitionProps={{ transition: 'slide-left', duration: 250, timingFunction: "ease" }}
        >
          <p>Hello</p>
        </Drawer>

        {/* <p className='main_title'>Нейросказки</p> */}
        <h1 className={clsx(styles.clr_1, "mt-5")}>Хантыйские сказки</h1>
        <p className={clsx("intro_text", "mt-4")}>
        Название Ханты-Мансийского автономного округа составлено из&nbsp;названий двух коренных народов
        этих мест&nbsp;&mdash; ханты и&nbsp;манси. Поэтому мы&nbsp;начинаем проект &laquo;Нейросказки&raquo;
        именно с&nbsp;хантыйского фольклора. Представленные здесь
        сказки <a href="https://clck.ru/36Ks8p">собрали и&nbsp;перевели</a> сотрудники Обско-Угорского института
        прикладных исследований и&nbsp;разработок.
        </p>

        <div className={clsx("pattern_wrapper")}>
          <div style={{ backgroundImage: `url(${patternKhanty})` }} className={clsx("pattern")}></div>
        </div>


        <LangSelector lang1={lang1} lang2={lang2} active={tale1Lang} toggleLang={toggleTale1Lang}/>

        <div className={clsx("tale")}>
          <h2 className={clsx(styles.clr_1, "mt-5")}>{tale1.title}</h2>
          <p className={clsx("mt-2")}>{tale1.content[0]}</p>
        </div>
      </div>
    </>
  );
}

export default Khanty;


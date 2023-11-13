import React from 'react';
import clsx from 'clsx';

import { useDisclosure } from '@mantine/hooks';

import { Drawer} from '@mantine/core';
import { Burger } from '@mantine/core';

import { motion } from "framer-motion"

import LangSelector from '../../../components/lang-selector/lang-selector';

import styles from "./khanty.module.css";

// Картинки
import patternKhanty from '../../../images/khanty/pattern-khanty.svg';
import tale1Image1Hor from "../../../images/khanty/tale1/khant_1_1_h.jpg";
import tale1Image1Vert from "../../../images/khanty/tale1/khant_1_1_v.jpg";
import tale1Image2Hor from "../../../images/khanty/tale1/khant_1_2_h.jpg";
import tale1Image2Vert from "../../../images/khanty/tale1/khant_1_2_v.jpg";
import tale1Image3Hor from "../../../images/khanty/tale1/khant_1_3_h.jpg";
import tale1Image3Vert from "../../../images/khanty/tale1/khant_1_3_v.jpg";

import { tale_1_rus, tale_1_khanty } from "../../../tales/khanty/khanty-1";


function Khanty() {

  const imageBreakpoint = "700px";

  const [menuOpened, menuHandlers] = useDisclosure(false);


  // Селекторы языка
  const lang1 = "РУС";
  const lang2 = "ХАНТ";

  const [tale1IsRus, tale1LangHandler] = useDisclosure(localStorage.getItem("khantTale1IsRus") === "true");

  React.useEffect(() => {
    localStorage.setItem('khantTale1IsRus', tale1IsRus);
  }, [tale1IsRus]);



  let tale1 = tale_1_rus;

  if (!tale1IsRus) {
    tale1 = tale_1_khanty;
  }

  // Animations
  const animations = {
    initial: {y: 100, opacity: 0},
    whileInView: {y: 0, opacity: 1},
    viewport: {once: true},
    transition: {type: "spring", stiffness: 100}
  }

  return (
    <>
      <div className={clsx("page")}>



        {/* Меню */}
        <Burger className={clsx("burger-button")} opened={menuOpened} onClick={menuHandlers.toggle} aria-label="Toggle navigation" />
        <Drawer
          position="right"
          opened={menuOpened}
          onClose={menuHandlers.toggle}
          transitionProps={{ transition: 'slide-left', duration: 250, timingFunction: "ease" }}
        >
          <p>Hello</p>
        </Drawer>



        {/* Заголовок и вводный абзац */}

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



        {/*-------------- Сказка 1 ----------------*/}

        <motion.div {...animations}>
          <LangSelector lang1={lang1} lang2={lang2} rus={tale1IsRus} toggleLang={tale1LangHandler.toggle}/>
        </motion.div>

        <div className={clsx("tale")}>

          <motion.h2 {...animations} className={clsx(styles.clr_1, "mt-5")}>{tale1.title}</motion.h2>
          <motion.p {...animations} className={clsx("mt-2")}>{tale1.content.p0}</motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale1Image1Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale1Image1Hor} 1500w`}
              />
              <img src={tale1Image1Hor} alt="Картинка с копающим котом" />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p1}</motion.p>

          <motion.p {...animations}>{tale1.content.p2}</motion.p>

          <motion.p {...animations}>{tale1.content.p3}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>{tale1.content.p4}</motion.p>

          <motion.p {...animations}>{tale1.content.p5}</motion.p>

          <motion.p {...animations}>{tale1.content.p6}</motion.p>

          <motion.p {...animations}>{tale1.content.p7}</motion.p>

          <motion.p {...animations}>{tale1.content.p8}</motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale1Image2Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale1Image2Hor} 1500w`}
              />
              <img src={tale1Image2Hor} alt="Картинка с белкой и медведем" />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p9}</motion.p>

          <motion.p {...animations}>{tale1.content.p10}</motion.p>

          <motion.p {...animations}>{tale1.content.p11}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>{tale1.content.p12}</motion.p>

          <motion.p {...animations}>{tale1.content.p13}</motion.p>

          <motion.p {...animations}>{tale1.content.p14}</motion.p>

          <motion.p {...animations}>{tale1.content.p15}</motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale1Image3Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale1Image3Hor} 1500w`}
              />
              <img src={tale1Image3Hor} alt="Картинка с пирующими белкой и котом" />
            </picture>
          </motion.div>

          <div className={clsx("pattern_wrapper")}>
            <div style={{ backgroundImage: `url(${patternKhanty})` }} className={clsx("pattern")}></div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Khanty;


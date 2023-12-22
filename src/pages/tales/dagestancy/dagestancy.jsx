import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';

import { useDisclosure } from '@mantine/hooks';

import { Drawer } from '@mantine/core';
import { Burger } from '@mantine/core';

import { motion } from "framer-motion"

import LangSelector from '../../../components/lang-selector/lang-selector';
import ToMainPageButton from '../../../components/to-main-page-button/to-main-page-button';

import styles from "./dagestancy.module.css";

// Картинки
import backIcon from '../../../images/to_left.svg';

import patternDag1 from '../../../images/dagestancy/pattern-dagestancy-1.svg';
import patternDag2 from '../../../images/dagestancy/pattern-dagestancy-2.svg';
import patternDag3 from '../../../images/dagestancy/pattern-dagestancy-3.svg';
import patternDag4 from '../../../images/dagestancy/pattern-dagestancy-4.svg';

import singlePatternDag1 from '../../../images/dagestancy/single-pattern-dagestancy-1.svg';
import singlePatternDag2 from '../../../images/dagestancy/single-pattern-dagestancy-2.svg';


import tale1Image1Hor from "../../../images/dagestancy/tale1/dagestancy_1_1_h.jpg";
import tale1Image1Vert from "../../../images/dagestancy/tale1/dagestancy_1_1_v.jpg";
import tale1Image2Hor from "../../../images/dagestancy/tale1/dagestancy_1_2_h.jpg";
import tale1Image2Vert from "../../../images/dagestancy/tale1/dagestancy_1_2_v.jpg";
import tale1Image3Hor from "../../../images/dagestancy/tale1/dagestancy_1_3_h.jpg";
import tale1Image3Vert from "../../../images/dagestancy/tale1/dagestancy_1_3_v.jpg";

import tale2Image1Hor from "../../../images/dagestancy/tale2/dagestancy_2_1_h.jpg";
import tale2Image1Vert from "../../../images/dagestancy/tale2/dagestancy_2_1_v.jpg";
import tale2Image2Hor from "../../../images/dagestancy/tale2/dagestancy_2_2_h.jpg";
import tale2Image2Vert from "../../../images/dagestancy/tale2/dagestancy_2_2_v.jpg";
import tale2Image3Hor from "../../../images/dagestancy/tale2/dagestancy_2_3_h.jpg";
import tale2Image3Vert from "../../../images/dagestancy/tale2/dagestancy_2_3_v.jpg";

import tale3Image1Hor from "../../../images/dagestancy/tale3/dagestancy_3_1_h.jpg";
import tale3Image1Vert from "../../../images/dagestancy/tale3/dagestancy_3_1_v.jpg";
import tale3Image2Hor from "../../../images/dagestancy/tale3/dagestancy_3_2_h.jpg";
import tale3Image2Vert from "../../../images/dagestancy/tale3/dagestancy_3_2_v.jpg";
import tale3Image3Hor from "../../../images/dagestancy/tale3/dagestancy_3_3_h.jpg";
import tale3Image3Vert from "../../../images/dagestancy/tale3/dagestancy_3_3_v.jpg";
import tale3Image4Hor from "../../../images/dagestancy/tale3/dagestancy_3_4_h.jpg";
import tale3Image4Vert from "../../../images/dagestancy/tale3/dagestancy_3_4_v.jpg";


import { tale_1_rus, tale_1_dag } from "../../../tales/dagestancy/dagestancy-1";
import { tale_2_rus, tale_2_dag } from "../../../tales/dagestancy/dagestancy-2";
import { tale_3_rus, tale_3_dag } from "../../../tales/dagestancy/dagestancy-3";



function Dag() {

  const imageBreakpoint = "700px";

  const [menuOpened, menuHandlers] = useDisclosure(false);

  // Переменные для скролла
  const scrollRefs = {
    firstTale: useRef(null),
    secondTale: useRef(null),
    thirdTale: useRef(null)
  }
  const handleScrollTo = (refKey) => {
    const tale = scrollRefs[refKey].current;
    if (tale) {
      tale.scrollIntoView({ behavior: 'smooth' });
      menuHandlers.close();
    }

  }


  // Селекторы языка
  const lang1 = "РУС";
  // const lang2 = "ДАГ";

  const [tale1IsRus, tale1LangHandler] = useDisclosure(
    ("dagestancyTale1IsRus" in localStorage) ? localStorage.getItem("dagestancyTale1IsRus") === "true" : true
  );

  const [tale2IsRus, tale2LangHandler] = useDisclosure(
    ("dagestancyTale2IsRus" in localStorage) ? localStorage.getItem("dagestancyTale2IsRus") === "true" : true
  );

  const [tale3IsRus, tale3LangHandler] = useDisclosure(
    ("dagestancyTale3IsRus" in localStorage) ? localStorage.getItem("dagestancyTale3IsRus") === "true" : true
  );

  useEffect(() => {
    localStorage.setItem('dagestancyTale1IsRus', tale1IsRus);
  }, [tale1IsRus]);

  useEffect(() => {
    localStorage.setItem('dagestancyTale2IsRus', tale2IsRus);
  }, [tale2IsRus]);

  useEffect(() => {
    localStorage.setItem('dagestancyTale3IsRus', tale3IsRus);
  }, [tale3IsRus]);

  let tale1 = tale_1_rus;
  let tale2 = tale_2_rus;
  let tale3 = tale_3_rus;

  if (!tale1IsRus) {
    tale1 = tale_1_dag;
  }

  if (!tale2IsRus) {
    tale2 = tale_2_dag;
  }

  if (!tale3IsRus) {
    tale3 = tale_3_dag;
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
      <div
        className={clsx("bg-patterns")}
        style={{
          backgroundImage: `url(${singlePatternDag1}), url(${singlePatternDag2})`,
        }}
      ></div>
      <div className={clsx("page")}>
        {/* Меню */}
        <Burger
          className={clsx("burger-button")}
          opened={menuOpened}
          onClick={menuHandlers.toggle}
          aria-label="Toggle navigation"
          size="lg"
          styles={{
            root: {
              backgroundColor: "rgba(255, 255, 255, 0.30)",
              backdropFilter: "blur(5px)",
              borderRadius: "5px",
            },
          }}
        />

        <Drawer.Root
          position="right"
          size="600"
          opened={menuOpened}
          lockScroll={true}
          transitionProps={{
            transition: "slide-left",
            duration: 250,
            timingFunction: "ease",
          }}
          styles={{
            content: {
              backgroundImage: `url(${singlePatternDag1}), url(${singlePatternDag2})`,
            },
            header: {
              zIndex: "2000",
            },
            body: {
              paddingTop: "0",
            },
          }}
        >
          <Drawer.Overlay />
          <Drawer.Content className={clsx("menu_container")}>
            <Drawer.Body>
              <Link className={clsx("menu_back_item")} to="/">
                <h4>
                  <img className="back_icon" src={backIcon} alt="back" />
                  Сказки других
                  <br />
                  народов
                </h4>
              </Link>

              <ul className={clsx("menu_items")}>
                <li
                  className={clsx(!tale1IsRus && "foreign", styles.clr_1)}
                  onClick={() => handleScrollTo("firstTale")}
                >
                  {tale1.title}
                </li>
                <li
                  className={clsx(!tale2IsRus && "foreign", styles.clr_2)}
                  onClick={() => handleScrollTo("secondTale")}
                >
                  {tale2.title}
                </li>
                <li
                  className={clsx(!tale3IsRus && "foreign", styles.clr_3)}
                  onClick={() => handleScrollTo("thirdTale")}
                >
                  {tale3.title}
                </li>
              </ul>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>

        {/* Заголовок и вводный абзац */}

        <h1 className={clsx(styles.clr_1, "mt-12")}>Дагестанские сказки</h1>
        <p className={clsx("intro_text", "mt-4")}>
          В&nbsp;топ-15 самых распространенных в&nbsp;Югре народов входят сразу
          три, чьи предки жили на&nbsp;территории современного Дагестана
          и&nbsp;ближайших к&nbsp;нему регионов: ногайцы, кумыки и&nbsp;лезгины.
          В&nbsp;их&nbsp;сказках переплелись и&nbsp;восточные мотивы,
          и&nbsp;явления, знакомые в&nbsp;европейской культуре. Мы&nbsp;решили
          взять по&nbsp;одному произведению каждого из&nbsp;этих народов.
        </p>
        <p className={clsx("intro_text")}>
          Редакция благодарит за&nbsp;помощь арт-директора Дагестанского
          регионального общественного благотворительного фонда &laquo;Развитие
          анимации и&nbsp;кинематографии&raquo; <span className="bold">Юрия Атаева</span>. Ногайскую сказку
          для NEFT подготовили заслуженный врач РФ&nbsp;<span className="bold">Тимур Арсланов</span>&nbsp;
          и&nbsp;заслуженный юрист Республики Дагестан <span className="bold">Тавлу Казакбиев</span>. Перевод
          лезинской сказки выполнила заслуженный работник культуры Республики
          Дагестан, автор стихов и&nbsp;прозы <span className="bold">Пакизат Фатуллаева</span>. Найти
          кумыкскую сказку нам помог <span className="bold">Тимур Порсуков</span>&nbsp;&mdash; председатель
          движения по&nbsp;защите национальных интересов &laquo;Хранители
          России&raquo; по&nbsp;Республике Дагестан. А&nbsp;перевела
          ее&nbsp;учитель родного языка и&nbsp;литературы из&nbsp;гимназии села
          Карабудахкент <span className="bold">Русайдат Салаватова</span>.
        </p>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternDag1})` }}
            className={clsx("pattern")}
          ></div>
        </div>

        {/*-------------- Сказка 1 ----------------*/}

        <section ref={scrollRefs.firstTale} className={clsx("tale")}>
          <motion.div {...animations}>
            <LangSelector
              lang1={lang1}
              lang2="НОГ"
              rus={tale1IsRus}
              toggleLang={tale1LangHandler.toggle}
            />
          </motion.div>

          <motion.h2
            {...animations}
            className={clsx(!tale1IsRus && "foreign", styles.clr_1, "mt-5")}
          >
            {tale1.title}
            <span className={clsx("tale_id")}>{tale1.id}</span>
          </motion.h2>

          <motion.p {...animations} className={clsx("mt-2")}>
            {tale1.content.p0}
          </motion.p>

          <motion.p {...animations}>{tale1.content.p1}</motion.p>

          <motion.p {...animations}>{tale1.content.p2}</motion.p>

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
              <img
                src={tale1Image1Hor}
                alt="Старик дремлет на пастбище, где гуляют овцы"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p3}</motion.p>

          <motion.p {...animations}>{tale1.content.p4}</motion.p>

          <motion.p {...animations}>{tale1.content.p5}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p6}
          </motion.p>

          <motion.p {...animations}>{tale1.content.p7}</motion.p>

          <motion.p {...animations}>{tale1.content.p8}</motion.p>

          <motion.p {...animations}>{tale1.content.p9}</motion.p>

          <motion.p {...animations}>{tale1.content.p10}</motion.p>

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
              <img
                src={tale1Image2Hor}
                alt="Конь стоит в тумане у реки"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p11}</motion.p>

          <motion.p {...animations}>{tale1.content.p12}</motion.p>

          <motion.p {...animations}>{tale1.content.p13}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p14}
          </motion.p>

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
              <img
                src={tale1Image3Hor}
                alt="Старый восточный хан задумчив"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p16}</motion.p>

          <motion.p {...animations}>{tale1.content.p17}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p18}
          </motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternDag2})` }}
            className={clsx("pattern")}
          ></div>
        </div>


        {/*-------------- Сказка 2 ----------------*/}

        <section ref={scrollRefs.secondTale} className={clsx("tale")}>
          <motion.div {...animations}>
            <LangSelector
              lang1={lang1}
              lang2="ЛЕЗ"
              rus={tale2IsRus}
              toggleLang={tale2LangHandler.toggle}
            />
          </motion.div>

          <motion.h2
            {...animations}
            className={clsx(!tale2IsRus && "foreign", styles.clr_2, "mt-5")}
          >
            {tale2.title}
            <span className={clsx("tale_id")}>{tale2.id}</span>
          </motion.h2>

          <motion.p {...animations} className={clsx("mt-2")}>
            {tale2.content.p0}
          </motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale2Image1Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale2Image1Hor} 1500w`}
              />
              <img
                src={tale2Image1Hor}
                alt="Птичка сидит у гнезда с тремя яйцами"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p1}</motion.p>

          <motion.p {...animations}>{tale2.content.p2}</motion.p>

          <motion.p {...animations}>{tale2.content.p3}</motion.p>

          <motion.p {...animations}>{tale2.content.p4}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p5}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p6}</motion.p>

          <motion.p {...animations}>{tale2.content.p7}</motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale2Image2Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale2Image2Hor} 1500w`}
              />
              <img
                src={tale2Image2Hor}
                alt="Лиса смотрит на дерево снизу вверх"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p8}</motion.p>

          <motion.p {...animations}>{tale2.content.p9}</motion.p>

          <motion.p {...animations}>{tale2.content.p10}</motion.p>

          <motion.p {...animations}>{tale2.content.p11}</motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale2Image3Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale2Image3Hor} 1500w`}
              />
              <img
                src={tale2Image3Hor}
                alt="Летящая дрофа"
              />
            </picture>
          </motion.div>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p12}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p13}</motion.p>

          <motion.p {...animations}>{tale2.content.p14}</motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternDag3})` }}
            className={clsx("pattern")}
          ></div>
        </div>


        {/*-------------- Сказка 3 ----------------*/}

        <section ref={scrollRefs.thirdTale} className={clsx("tale")}>
          <motion.div {...animations}>
            <LangSelector
              lang1={lang1}
              lang2="КУМ"
              rus={tale3IsRus}
              toggleLang={tale3LangHandler.toggle}
            />
          </motion.div>

          <motion.h2
            {...animations}
            className={clsx(!tale3IsRus && "foreign", styles.clr_3, "mt-5")}
          >
            {tale3.title}
            <span className={clsx("tale_id")}>{tale3.id}</span>
          </motion.h2>

          <motion.p {...animations} className={clsx("mt-2")}>
            {tale3.content.p0}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p1}</motion.p>

          <motion.p {...animations}>{tale3.content.p2}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p3}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p4}</motion.p>

          <motion.p {...animations}>{tale3.content.p5}</motion.p>

          <motion.p {...animations}>{tale3.content.p6}</motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale3Image1Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale3Image1Hor} 1500w`}
              />
              <img
                src={tale3Image1Hor}
                alt="Табун лошадей разных мастей"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p7}</motion.p>

          <motion.p {...animations}>{tale3.content.p8}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p9}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p10}</motion.p>

          <motion.p {...animations}>{tale3.content.p11}</motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale3Image2Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale3Image2Hor} 1500w`}
              />
              <img
                src={tale3Image2Hor}
                alt="Дочь хана разговаривает с мужчиной"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p12}</motion.p>

          <motion.p {...animations}>{tale3.content.p13}</motion.p>

          <motion.p {...animations}>{tale3.content.p14}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p15}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p16}</motion.p>

          <motion.p {...animations}>{tale3.content.p17}</motion.p>

          <motion.p {...animations}>{tale3.content.p18}</motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale3Image3Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale3Image3Hor} 1500w`}
              />
              <img
                src={tale3Image3Hor}
                alt="Погоня на лошадях"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p19}</motion.p>

          <motion.p {...animations}>{tale3.content.p20}</motion.p>

          <motion.p {...animations}>{tale3.content.p21}</motion.p>

          <motion.p {...animations}>{tale3.content.p22}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p23}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p24}</motion.p>

          <motion.p {...animations}>{tale3.content.p25}</motion.p>

          <motion.p {...animations}>{tale3.content.p26}</motion.p>

          <motion.p {...animations}>{tale3.content.p27}</motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale3Image4Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale3Image4Hor} 1500w`}
              />
              <img
                src={tale3Image4Hor}
                alt="Погоня на лошадях"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p28}</motion.p>

          <motion.p {...animations}>{tale3.content.p29}</motion.p>

          <motion.p {...animations}>{tale3.content.p30}</motion.p>

        </section>


        <ToMainPageButton />

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternDag4})` }}
            className={clsx("pattern")}
          ></div>
        </div>

        <div className={clsx("footer-spacer")}></div>
      </div>
    </>
  );
}

export default Dag;


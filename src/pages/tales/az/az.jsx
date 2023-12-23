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

import styles from "./az.module.css";

// Картинки
import backIcon from '../../../images/to_left.svg';

import patternAz1 from '../../../images/az/pattern-az-1.svg';
import patternAz2 from '../../../images/az/pattern-az-2.svg';
import patternAz3 from '../../../images/az/pattern-az-3.svg';
import patternAz4 from '../../../images/az/pattern-az-4.svg';

import singlePatternAz1 from '../../../images/az/single-pattern-az-1.svg';
import singlePatternAz2 from '../../../images/az/single-pattern-az-2.svg';


import tale1Image1Hor from "../../../images/az/tale1/az_1_1_h.jpg";
import tale1Image1Vert from "../../../images/az/tale1/az_1_1_v.jpg";
import tale1Image2Hor from "../../../images/az/tale1/az_1_2_h.jpg";
import tale1Image2Vert from "../../../images/az/tale1/az_1_2_v.jpg";
import tale1Image3Hor from "../../../images/az/tale1/az_1_3_h.jpg";
import tale1Image3Vert from "../../../images/az/tale1/az_1_3_v.jpg";

import tale2Image1Hor from "../../../images/az/tale2/az_2_1_h.jpg";
import tale2Image1Vert from "../../../images/az/tale2/az_2_1_v.jpg";
import tale2Image2Hor from "../../../images/az/tale2/az_2_2_h.jpg";
import tale2Image2Vert from "../../../images/az/tale2/az_2_2_v.jpg";
import tale2Image3Hor from "../../../images/az/tale2/az_2_3_h.jpg";
import tale2Image3Vert from "../../../images/az/tale2/az_2_3_v.jpg";

import tale3Image1Hor from "../../../images/az/tale3/az_3_1_h.jpg";
import tale3Image1Vert from "../../../images/az/tale3/az_3_1_v.jpg";
import tale3Image2Hor from "../../../images/az/tale3/az_3_2_h.jpg";
import tale3Image2Vert from "../../../images/az/tale3/az_3_2_v.jpg";
import tale3Image3Hor from "../../../images/az/tale3/az_3_3_h.jpg";
import tale3Image3Vert from "../../../images/az/tale3/az_3_3_v.jpg";
import tale3Image4Hor from "../../../images/az/tale3/az_3_4_h.jpg";
import tale3Image4Vert from "../../../images/az/tale3/az_3_4_v.jpg";
import tale3Image5Hor from "../../../images/az/tale3/az_3_5_h.jpg";
import tale3Image5Vert from "../../../images/az/tale3/az_3_5_v.jpg";
import tale3Image6Hor from "../../../images/az/tale3/az_3_6_h.jpg";
import tale3Image6Vert from "../../../images/az/tale3/az_3_6_v.jpg";


import { tale_1_rus, tale_1_az } from "../../../tales/az/az-1";
import { tale_2_rus, tale_2_az } from "../../../tales/az/az-2";
import { tale_3_rus, tale_3_az } from "../../../tales/az/az-3";



function Az() {

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
  const lang2 = "АЗ";

  const [tale1IsRus, tale1LangHandler] = useDisclosure(
    ("azTale1IsRus" in localStorage) ? localStorage.getItem("azTale1IsRus") === "true" : true
  );

  const [tale2IsRus, tale2LangHandler] = useDisclosure(
    ("azTale2IsRus" in localStorage) ? localStorage.getItem("azTale2IsRus") === "true" : true
  );

  const [tale3IsRus, tale3LangHandler] = useDisclosure(
    ("azTale3IsRus" in localStorage) ? localStorage.getItem("azTale3IsRus") === "true" : true
  );

  useEffect(() => {
    localStorage.setItem('azTale1IsRus', tale1IsRus);
  }, [tale1IsRus]);

  useEffect(() => {
    localStorage.setItem('azTale2IsRus', tale2IsRus);
  }, [tale2IsRus]);

  useEffect(() => {
    localStorage.setItem('azTale3IsRus', tale3IsRus);
  }, [tale3IsRus]);

  let tale1 = tale_1_rus;
  let tale2 = tale_2_rus;
  let tale3 = tale_3_rus;

  if (!tale1IsRus) {
    tale1 = tale_1_az;
  }

  if (!tale2IsRus) {
    tale2 = tale_2_az;
  }

  if (!tale3IsRus) {
    tale3 = tale_3_az;
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
          backgroundImage: `url(${singlePatternAz1}), url(${singlePatternAz2})`,
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
              backgroundImage: `url(${singlePatternAz1}), url(${singlePatternAz2})`,
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

        <h1 className={clsx(styles.clr_1, "mt-12")}>Азербайджанские сказки</h1>
        <p className={clsx("intro_text", "mt-4")}>
          Азербайджанцев в&nbsp;Ханты-Мансийском округе немало:
          на&nbsp;их&nbsp;исторической родине много нефти, и&nbsp;специалисты
          оттуда хорошо знают, что делать с&nbsp;недрами. Даже один
          из&nbsp;первооткрывателей югорской нефти, Фарман Салманов&nbsp;&mdash;
          тоже азербайджанец по&nbsp;происхождению.
        </p>
        <p className={clsx("intro_text")}>
          Редакция благодарит за&nbsp;помощь в&nbsp;поиске сказок{" "}
          <span className="bold">Эльшана Агаева</span>&nbsp;&mdash; главу
          азербайджанской общественной организации &laquo;Бирлик&raquo;
          в&nbsp;Нижневартовске.
        </p>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternAz1})` }}
            className={clsx("pattern")}
          ></div>
        </div>


        {/*-------------- Сказка 1 ----------------*/}

        <section ref={scrollRefs.firstTale} className={clsx("tale")}>
          <motion.div {...animations}>
            <LangSelector
              lang1={lang1}
              lang2={lang2}
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
                alt="Мальчик машет маме на прощание, уходя из дома"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p2}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p3}
          </motion.p>

          <motion.p {...animations}>{tale1.content.p4}</motion.p>

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
              <img
                src={tale1Image2Hor}
                alt="Дети сидят в сумерках на опушке леса"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p9}</motion.p>

          <motion.p {...animations}>{tale1.content.p10}</motion.p>

          <motion.p {...animations}>{tale1.content.p11}</motion.p>

          <motion.p {...animations}>{tale1.content.p12}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p13}
          </motion.p>

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
              <img
                src={tale1Image3Hor}
                alt="Див сидит у реки с решетом"
              />
            </picture>
          </motion.div>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p16}
          </motion.p>

          <motion.p {...animations}>{tale1.content.p17}</motion.p>

          <motion.p {...animations}>{tale1.content.p18}</motion.p>

          <motion.p {...animations}>{tale1.content.p19}</motion.p>

          <motion.p {...animations}>{tale1.content.p20}</motion.p>

          <motion.p {...animations}>{tale1.content.p21}</motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternAz2})` }}
            className={clsx("pattern")}
          ></div>
        </div>


        {/*-------------- Сказка 2 ----------------*/}

        <section ref={scrollRefs.secondTale} className={clsx("tale")}>
          <motion.div {...animations}>
            <LangSelector
              lang1={lang1}
              lang2={lang2}
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

          <motion.p {...animations}>{tale2.content.p1}</motion.p>

          <motion.p {...animations}>{tale2.content.p2}</motion.p>

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
                alt="Кошка сидит в окружении разных светильников и подсвечников"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p3}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p4}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p5}</motion.p>

          <motion.p {...animations}>{tale2.content.p6}</motion.p>

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
                alt="Караван из верблюдов и людей уходит в закат среди пустыни и гор"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p7}</motion.p>

          <motion.p {...animations}>{tale2.content.p8}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p9}
          </motion.p>

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
                alt="Мышь бежит через комнату, обставленную в восточном стиле"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p12}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p13}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p14}</motion.p>

          <motion.p {...animations}>{tale2.content.p15}</motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternAz3})` }}
            className={clsx("pattern")}
          ></div>
        </div>


        {/*-------------- Сказка 3 ----------------*/}

        <section ref={scrollRefs.thirdTale} className={clsx("tale")}>
          <motion.div {...animations}>
            <LangSelector
              lang1={lang1}
              lang2={lang2}
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
                alt="Старуха стоит, опираясь на посох, и смеется"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p2}</motion.p>

          <motion.p {...animations}>{tale3.content.p3}</motion.p>

          <motion.p {...animations}>{tale3.content.p4}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p5}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p6}</motion.p>

          <motion.p {...animations}>{tale3.content.p7}</motion.p>

          <motion.p {...animations}>{tale3.content.p8}</motion.p>

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
                alt="Злой шах указывает на дверь"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p9}</motion.p>

          <motion.p {...animations}>{tale3.content.p10}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p11}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p12}</motion.p>

          <motion.p {...animations}>{tale3.content.p13}</motion.p>

          <motion.p {...animations}>{tale3.content.p14}</motion.p>

          <motion.p {...animations}>{tale3.content.p15}</motion.p>

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
                alt="Молодая черноволосая женщина стоит на крыльце восточного дома"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p16}</motion.p>

          <motion.p {...animations}>{tale3.content.p17}</motion.p>

          <motion.p {...animations}>{tale3.content.p18}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p19}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p20}</motion.p>

          <motion.p {...animations}>{tale3.content.p21}</motion.p>

          <motion.p {...animations}>{tale3.content.p22}</motion.p>

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
                alt="Караван из верблюдов и людей идёт под палящим солнцем"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p23}</motion.p>

          <motion.p {...animations}>{tale3.content.p24}</motion.p>

          <motion.p {...animations}>{tale3.content.p25}</motion.p>

          <motion.p {...animations}>{tale3.content.p26}</motion.p>

          <motion.p {...animations}>{tale3.content.p27}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p28}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p29}</motion.p>

          <motion.p {...animations}>{tale3.content.p30}</motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale3Image5Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale3Image5Hor} 1500w`}
              />
              <img
                src={tale3Image5Hor}
                alt="Кошка сидит у колодца"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p31}</motion.p>

          <motion.p {...animations}>{tale3.content.p32}</motion.p>

          <motion.p {...animations}>{tale3.content.p33}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p34}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p35}</motion.p>

          <motion.p {...animations}>{tale3.content.p36}</motion.p>

          <motion.p {...animations}>{tale3.content.p37}</motion.p>

          <motion.p {...animations}>{tale3.content.p38}</motion.p>

          <motion.p {...animations}>{tale3.content.p39}</motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale3Image6Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale3Image6Hor} 1500w`}
              />
              <img
                src={tale3Image6Hor}
                alt="Гранат, у которого вместо зёрен драгоценные камни"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p40}</motion.p>

          <motion.p {...animations}>{tale3.content.p41}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p42}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p43}</motion.p>

          <motion.p {...animations}>{tale3.content.p44}</motion.p>

          <motion.p {...animations}>{tale3.content.p45}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p46}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p47}</motion.p>

          <motion.p {...animations}>{tale3.content.p48}</motion.p>

        </section>

        <ToMainPageButton />

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternAz4})` }}
            className={clsx("pattern")}
          ></div>
        </div>

        <div className={clsx("footer-spacer")}></div>
      </div>
    </>
  );
}

export default Az;


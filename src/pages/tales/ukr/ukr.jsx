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

import styles from "./ukr.module.css";

// Картинки
import backIcon from '../../../images/to_left.svg';

import patternUkr1 from '../../../images/ukr/pattern-ukr-1.svg';
import patternUkr2 from '../../../images/ukr/pattern-ukr-2.svg';
import patternUkr3 from '../../../images/ukr/pattern-ukr-3.svg';
import patternUkr4 from '../../../images/ukr/pattern-ukr-4.svg';

import singlePatternUkr1 from '../../../images/ukr/single-pattern-ukr-1.svg';
import singlePatternUkr2 from '../../../images/ukr/single-pattern-ukr-2.svg';


import tale1Image1Hor from "../../../images/ukr/tale1/ukr_1_1_h.jpg";
import tale1Image1Vert from "../../../images/ukr/tale1/ukr_1_1_v.jpg";
import tale1Image2Hor from "../../../images/ukr/tale1/ukr_1_2_h.jpg";
import tale1Image2Vert from "../../../images/ukr/tale1/ukr_1_2_v.jpg";
import tale1Image3Hor from "../../../images/ukr/tale1/ukr_1_3_h.jpg";
import tale1Image3Vert from "../../../images/ukr/tale1/ukr_1_3_v.jpg";

import tale2Image1Hor from "../../../images/ukr/tale2/ukr_2_1_h.jpg";
import tale2Image1Vert from "../../../images/ukr/tale2/ukr_2_1_v.jpg";
import tale2Image2Hor from "../../../images/ukr/tale2/ukr_2_2_h.jpg";
import tale2Image2Vert from "../../../images/ukr/tale2/ukr_2_2_v.jpg";

import tale3Image1Hor from "../../../images/ukr/tale3/ukr_3_1_h.jpg";
import tale3Image1Vert from "../../../images/ukr/tale3/ukr_3_1_v.jpg";
import tale3Image2Hor from "../../../images/ukr/tale3/ukr_3_2_h.jpg";
import tale3Image2Vert from "../../../images/ukr/tale3/ukr_3_2_v.jpg";
import tale3Image3Hor from "../../../images/ukr/tale3/ukr_3_3_h.jpg";
import tale3Image3Vert from "../../../images/ukr/tale3/ukr_3_3_v.jpg";
import tale3Image4Hor from "../../../images/ukr/tale3/ukr_3_4_h.jpg";
import tale3Image4Vert from "../../../images/ukr/tale3/ukr_3_4_v.jpg";


import { tale_1_rus, tale_1_ukr } from "../../../tales/ukr/ukr-1";
import { tale_2_rus, tale_2_ukr } from "../../../tales/ukr/ukr-2";
import { tale_3_rus, tale_3_ukr } from "../../../tales/ukr/ukr-3";



function Mansi() {

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
  const lang2 = "УКР";

  const [tale1IsRus, tale1LangHandler] = useDisclosure(
    ("ukrTale1IsRus" in localStorage) ? localStorage.getItem("ukrTale1IsRus") === "true" : true
  );

  const [tale2IsRus, tale2LangHandler] = useDisclosure(
    ("ukrTale2IsRus" in localStorage) ? localStorage.getItem("ukrTale2IsRus") === "true" : true
  );

  const [tale3IsRus, tale3LangHandler] = useDisclosure(
    ("ukrTale3IsRus" in localStorage) ? localStorage.getItem("ukrTale3IsRus") === "true" : true
  );

  useEffect(() => {
    localStorage.setItem('ukrTale1IsRus', tale1IsRus);
  }, [tale1IsRus]);

  useEffect(() => {
    localStorage.setItem('ukrTale2IsRus', tale2IsRus);
  }, [tale2IsRus]);

  useEffect(() => {
    localStorage.setItem('ukrTale3IsRus', tale3IsRus);
  }, [tale3IsRus]);

  let tale1 = tale_1_rus;
  let tale2 = tale_2_rus;
  let tale3 = tale_3_rus;

  if (!tale1IsRus) {
    tale1 = tale_1_ukr;
  }

  if (!tale2IsRus) {
    tale2 = tale_2_ukr;
  }

  if (!tale3IsRus) {
    tale3 = tale_3_ukr;
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
          backgroundImage: `url(${singlePatternUkr1}), url(${singlePatternUkr2})`,
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
              backgroundImage: `url(${singlePatternUkr1}), url(${singlePatternUkr2})`,
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

        <h1 className={clsx(styles.clr_1, "mt-12")}>Украинские сказки</h1>
        <p className={clsx("intro_text", "mt-4")}>
          Украинцы&nbsp;&mdash; третья по&nbsp;численности этническая группа
          в&nbsp;Югре. Исторически их&nbsp;предки оказывались в&nbsp;Сибири
          по&nbsp;разным причинам: от&nbsp;освоения новых земель
          до&nbsp;политических ссылок. Но&nbsp;каждая новая волна вносила
          значительный вклад в&nbsp;развитие региона. Украинские сказки нередко
          связаны с&nbsp;бытовыми сюжетами, где важно не&nbsp;волшебство,
          а&nbsp;смекалка.
        </p>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternUkr1})` }}
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
                alt="Два человека в телеге, запряженной лошадью"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p1}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p2}
          </motion.p>

          <motion.p {...animations}>{tale1.content.p3}</motion.p>

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
                alt="Толстый заяц сидит на мосту"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p4}</motion.p>

          <motion.p {...animations}>{tale1.content.p5}</motion.p>

          <motion.p {...animations}>{tale1.content.p6}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p7}
          </motion.p>

          <motion.p {...animations}>{tale1.content.p8}</motion.p>

          <motion.p {...animations}>{tale1.content.p9}</motion.p>

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
                alt="Заяц смотрит на проезжающую мимо телегу"
              />
            </picture>
          </motion.div>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternUkr2})` }}
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
                alt="Нищий старик в чёрной одежде стучит в окно"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p2}</motion.p>

          <motion.p {...animations}>{tale2.content.p3}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p4}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p5}</motion.p>

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
                alt="Милосердная барыня у окна"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p8}</motion.p>

          <motion.p {...animations}>{tale2.content.p9}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p10}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p11}</motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternUkr3})` }}
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
                alt="Одна женщина шепчет на ухо другой"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p2}</motion.p>

          <motion.p {...animations}>{tale3.content.p3}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p4}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p5}</motion.p>

          <motion.p {...animations}>{tale3.content.p6}</motion.p>

          <motion.p {...animations}>{tale3.content.p7}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p8}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p9}</motion.p>

          <motion.p {...animations}>{tale3.content.p10}</motion.p>

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
                alt="Дерево, на котором растут бублики"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p11}</motion.p>

          <motion.p {...animations}>{tale3.content.p12}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p13}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p14}</motion.p>

          <motion.p {...animations}>{tale3.content.p15}</motion.p>

          <motion.p {...animations}>{tale3.content.p16}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p17}
          </motion.p>

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
                alt="Мужчина и женщина едят бублики у окна"
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

          <motion.p {...animations}>{tale3.content.p28}</motion.p>

          <motion.p {...animations}>{tale3.content.p29}</motion.p>

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
                alt="Усатый богатый мужчина в недоумении держится за лицо"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p30}</motion.p>

          <motion.p {...animations}>{tale3.content.p31}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p32}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p33}</motion.p>

          <motion.p {...animations}>{tale3.content.p34}</motion.p>

          <motion.p {...animations}>{tale3.content.p35}</motion.p>

        </section>

        <ToMainPageButton />

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternUkr4})` }}
            className={clsx("pattern")}
          ></div>
        </div>

        <div className={clsx("footer-spacer")}></div>
      </div>
    </>
  );
}

export default Mansi;


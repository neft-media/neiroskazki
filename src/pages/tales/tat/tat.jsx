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

import styles from "./tat.module.css";

// Картинки
import backIcon from '../../../images/to_left.svg';

import patternTat1 from '../../../images/tat/pattern-tat-1.svg';
import patternTat2 from '../../../images/tat/pattern-tat-2.svg';
import patternTat3 from '../../../images/tat/pattern-tat-3.svg';
import patternTat4 from '../../../images/tat/pattern-tat-4.svg';

import singlePatternTat1 from '../../../images/tat/single-pattern-tat-1.svg';
import singlePatternTat2 from '../../../images/tat/single-pattern-tat-2.svg';


import tale1Image1Hor from "../../../images/tat/tale1/tat_1_1_h.jpg";
import tale1Image1Vert from "../../../images/tat/tale1/tat_1_1_v.jpg";
import tale1Image2Hor from "../../../images/tat/tale1/tat_1_2_h.jpg";
import tale1Image2Vert from "../../../images/tat/tale1/tat_1_2_v.jpg";
import tale1Image3Hor from "../../../images/tat/tale1/tat_1_3_h.jpg";
import tale1Image3Vert from "../../../images/tat/tale1/tat_1_3_v.jpg";

import tale2Image1Hor from "../../../images/tat/tale2/tat_2_1_h.jpg";
import tale2Image1Vert from "../../../images/tat/tale2/tat_2_1_v.jpg";
import tale2Image2Hor from "../../../images/tat/tale2/tat_2_2_h.jpg";
import tale2Image2Vert from "../../../images/tat/tale2/tat_2_2_v.jpg";
import tale2Image3Hor from "../../../images/tat/tale2/tat_2_3_h.jpg";
import tale2Image3Vert from "../../../images/tat/tale2/tat_2_3_v.jpg";

import tale3Image1Hor from "../../../images/tat/tale3/tat_3_1_h.jpg";
import tale3Image1Vert from "../../../images/tat/tale3/tat_3_1_v.jpg";
import tale3Image2Hor from "../../../images/tat/tale3/tat_3_2_h.jpg";
import tale3Image2Vert from "../../../images/tat/tale3/tat_3_2_v.jpg";
import tale3Image3Hor from "../../../images/tat/tale3/tat_3_3_h.jpg";
import tale3Image3Vert from "../../../images/tat/tale3/tat_3_3_v.jpg";


import { tale_1_rus, tale_1_tat } from "../../../tales/tat/tat-1";
import { tale_2_rus, tale_2_tat } from "../../../tales/tat/tat-2";
import { tale_3_rus, tale_3_tat } from "../../../tales/tat/tat-3";



function Tat() {

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
  const lang2 = "ТАТ";

  const [tale1IsRus, tale1LangHandler] = useDisclosure(
    ("tatTale1IsRus" in localStorage) ? localStorage.getItem("tatTale1IsRus") === "true" : true
  );

  const [tale2IsRus, tale2LangHandler] = useDisclosure(
    ("tatTale2IsRus" in localStorage) ? localStorage.getItem("tatTale2IsRus") === "true" : true
  );

  const [tale3IsRus, tale3LangHandler] = useDisclosure(
    ("tatTale3IsRus" in localStorage) ? localStorage.getItem("tatTale3IsRus") === "true" : true
  );

  useEffect(() => {
    localStorage.setItem('tatTale1IsRus', tale1IsRus);
  }, [tale1IsRus]);

  useEffect(() => {
    localStorage.setItem('tatTale2IsRus', tale2IsRus);
  }, [tale2IsRus]);

  useEffect(() => {
    localStorage.setItem('tatTale3IsRus', tale3IsRus);
  }, [tale3IsRus]);

  let tale1 = tale_1_rus;
  let tale2 = tale_2_rus;
  let tale3 = tale_3_rus;

  if (!tale1IsRus) {
    tale1 = tale_1_tat;
  }

  if (!tale2IsRus) {
    tale2 = tale_2_tat;
  }

  if (!tale3IsRus) {
    tale3 = tale_3_tat;
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
          backgroundImage: `url(${singlePatternTat1}), url(${singlePatternTat2})`,
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
              backgroundImage: `url(${singlePatternTat1}), url(${singlePatternTat2})`,
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

        <h1 className={clsx(styles.clr_1, "mt-12")}>Татарские сказки</h1>
        <p className={clsx("intro_text", "mt-4")}>
          Татары составляют около&nbsp;7% населения Югры, и&nbsp;это второй
          по&nbsp;численности этнос в&nbsp;регионе после русских.
          В&nbsp;подборку татарских сказок мы&nbsp;взяли не&nbsp;только образец
          фольклора, но&nbsp;и&nbsp;два авторских произведения. Сказку
          о&nbsp;двух петухах написал{" "}
          <a
            href="http://tatarlar.info/2023/09/15/abdulla-alish/"
            target="_blank"
          >
            <nobr>Абдулла Алиш</nobr>
          </a>
          , а&nbsp;о&nbsp;водяной ведьме&nbsp;&mdash;{" "}
          <a
            href="https://www.culture.ru/persons/9630/gabdulla-tukai"
            target="_blank"
          >
            <nobr>Габдулла Тукай</nobr>
          </a>{" "}
          (художественный перевод его стихов на&nbsp;русский сделал{" "}
          <a
            href="http://gabdullatukay.ru/rus/tukay-prize/laureates/2006-god/buharaev-ravil-raisovich-poet/"
            target="_blank"
          >
            <nobr>Равиль Бухараев</nobr>
          </a>
          ). Эти сказки давно стали частью татарской культуры,
          и&nbsp;современные читатели уже считают их&nbsp;народными.
        </p>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternTat1})` }}
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
                alt="Старик-татарин смотрит вдаль на фоне полей и стогов"
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
                alt="Закат над полем со стогами сена"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p7}</motion.p>

          <motion.p {...animations}>{tale1.content.p8}</motion.p>

          <motion.p {...animations}>{tale1.content.p9}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p10}
          </motion.p>

          <motion.p {...animations}>{tale1.content.p11}</motion.p>

          <motion.p {...animations}>{tale1.content.p12}</motion.p>

          <motion.p {...animations}>{tale1.content.p13}</motion.p>

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
                alt="Двое мужчин косят траву в поле"
              />
            </picture>
          </motion.div>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p14}
          </motion.p>

          <motion.p {...animations}>{tale1.content.p15}</motion.p>

          <motion.p {...animations}>{tale1.content.p16}</motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternTat2})` }}
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
                alt="Старик-татарин смотрит вдаль на фоне полей и стогов"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p3}</motion.p>

          <motion.p {...animations}>{tale2.content.p4}</motion.p>

          <motion.p {...animations}>{tale2.content.p5}</motion.p>

          <motion.p {...animations}>{tale2.content.p6}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p7}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p8}</motion.p>

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
                alt="Старая женщина несет черного петуха"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p9}</motion.p>

          <motion.p {...animations}>{tale2.content.p10}</motion.p>

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
                alt="Черный и белый петух сидят на заборе"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p11}</motion.p>

          <motion.p {...animations}>{tale2.content.p12}</motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternTat3})` }}
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

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p1}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p2}</motion.p>

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
                alt="Водяная ведьма держит в руках золотую расческу"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p3}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p4}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p5}</motion.p>

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
                alt="Мальчик бежит в деревню, держа в руке золотую расческу"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p6}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p7}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p8}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p9}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p10}</motion.p>

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
                alt="Золотая расческа лежит на подоконнике"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p11}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p12}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p13}</motion.p>


        </section>

        <ToMainPageButton />

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternTat4})` }}
            className={clsx("pattern")}
          ></div>
        </div>

        <div className={clsx("footer-spacer")}></div>
      </div>
    </>
  );
}

export default Tat;


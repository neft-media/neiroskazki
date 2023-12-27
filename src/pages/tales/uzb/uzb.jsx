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

import styles from "./uzb.module.css";

// Картинки
import backIcon from '../../../images/to_left.svg';

import patternUzb1 from '../../../images/uzb/pattern-uzb-1.svg';
import patternUzb2 from '../../../images/uzb/pattern-uzb-2.svg';
import patternUzb3 from '../../../images/uzb/pattern-uzb-3.svg';
import patternUzb4 from '../../../images/uzb/pattern-uzb-4.svg';

import singlePatternUzb1 from '../../../images/uzb/single-pattern-uzb-1.svg';
import singlePatternUzb2 from '../../../images/uzb/single-pattern-uzb-2.svg';


import tale1Image1Hor from "../../../images/uzb/tale1/uzb_1_1_h.jpg";
import tale1Image1Vert from "../../../images/uzb/tale1/uzb_1_1_v.jpg";
import tale1Image2Hor from "../../../images/uzb/tale1/uzb_1_2_h.jpg";
import tale1Image2Vert from "../../../images/uzb/tale1/uzb_1_2_v.jpg";
import tale1Image3Hor from "../../../images/uzb/tale1/uzb_1_3_h.jpg";
import tale1Image3Vert from "../../../images/uzb/tale1/uzb_1_3_v.jpg";

import tale2Image1Hor from "../../../images/uzb/tale2/uzb_2_1_h.jpg";
import tale2Image1Vert from "../../../images/uzb/tale2/uzb_2_1_v.jpg";
import tale2Image2Hor from "../../../images/uzb/tale2/uzb_2_2_h.jpg";
import tale2Image2Vert from "../../../images/uzb/tale2/uzb_2_2_v.jpg";
import tale2Image3Hor from "../../../images/uzb/tale2/uzb_2_3_h.jpg";
import tale2Image3Vert from "../../../images/uzb/tale2/uzb_2_3_v.jpg";
import tale2Image4Hor from "../../../images/uzb/tale2/uzb_2_4_h.jpg";
import tale2Image4Vert from "../../../images/uzb/tale2/uzb_2_4_v.jpg";

import tale3Image1Hor from "../../../images/uzb/tale3/uzb_3_1_h.jpg";
import tale3Image1Vert from "../../../images/uzb/tale3/uzb_3_1_v.jpg";
import tale3Image2Hor from "../../../images/uzb/tale3/uzb_3_2_h.jpg";
import tale3Image2Vert from "../../../images/uzb/tale3/uzb_3_2_v.jpg";


import { tale_1_rus, tale_1_uzb } from "../../../tales/uzb/uzb-1";
import { tale_2_rus, tale_2_uzb } from "../../../tales/uzb/uzb-2";
import { tale_3_rus, tale_3_uzb } from "../../../tales/uzb/uzb-3";



function Uzb() {

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
  const lang2 = "УЗБ";

  const [tale1IsRus, tale1LangHandler] = useDisclosure(
    ("uzbTale1IsRus" in localStorage) ? localStorage.getItem("uzbTale1IsRus") === "true" : true
  );

  const [tale2IsRus, tale2LangHandler] = useDisclosure(
    ("uzbTale2IsRus" in localStorage) ? localStorage.getItem("uzbTale2IsRus") === "true" : true
  );

  const [tale3IsRus, tale3LangHandler] = useDisclosure(
    ("uzbTale3IsRus" in localStorage) ? localStorage.getItem("uzbTale3IsRus") === "true" : true
  );

  useEffect(() => {
    localStorage.setItem('uzbTale1IsRus', tale1IsRus);
  }, [tale1IsRus]);

  useEffect(() => {
    localStorage.setItem('uzbTale2IsRus', tale2IsRus);
  }, [tale2IsRus]);

  useEffect(() => {
    localStorage.setItem('uzbTale3IsRus', tale3IsRus);
  }, [tale3IsRus]);

  let tale1 = tale_1_rus;
  let tale2 = tale_2_rus;
  let tale3 = tale_3_rus;

  if (!tale1IsRus) {
    tale1 = tale_1_uzb;
  }

  if (!tale2IsRus) {
    tale2 = tale_2_uzb;
  }

  if (!tale3IsRus) {
    tale3 = tale_3_uzb;
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
          backgroundImage: `url(${singlePatternUzb1}), url(${singlePatternUzb2})`,
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
              backgroundImage: `url(${singlePatternUzb1}), url(${singlePatternUzb2})`,
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

        <h1 className={clsx(styles.clr_1, "mt-12")}>Узбекские сказки</h1>
        <p className={clsx("intro_text", "mt-4")}>
          Согласно переписи населения, в&nbsp;Югру на&nbsp;вахты регулярно
          приезжают сотни работников из&nbsp;Узбекистана. Но&nbsp;и&nbsp;тех,
          кто остается в&nbsp;регионе насовсем, становится все больше. Поэтому
          стоит знать хотя&nbsp;бы некоторые образцы узбекского фольклора, чтобы
          понимать культурные традиции.
        </p>
        <p className={clsx("intro_text")}>
          Редакция благодарит за&nbsp;помощь в&nbsp;поиске и&nbsp;переводе
          сказок заместителя председателя{" "}
          <a href="https://vk.com/club223532611" target="_blank">
            Региональной узбекской диаспоры
          </a>{" "}
          по&nbsp;ХМАО&nbsp;&mdash; Югре{" "}
          <span className="bold">Шерзода Ташматова</span>.
        </p>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternUzb1})` }}
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
                alt="Аист высоко в небе"
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
                alt="Двое мужчин в узбекских халатах разговаривают"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p10}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p11}
          </motion.p>

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
                alt="Разломанные арбузы, над которыми кружит рой ос"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p14}</motion.p>

          <motion.p {...animations}>{tale1.content.p15}</motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternUzb2})` }}
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
                alt="Старик стоит перед стадом баранов"
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

          <motion.p {...animations}>{tale2.content.p9}</motion.p>

          <motion.p {...animations}>{tale2.content.p10}</motion.p>

          <motion.p {...animations}>{tale2.content.p11}</motion.p>

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
                alt="Пустой глиняный горшок стоит на пустом столе"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p12}</motion.p>

          <motion.p {...animations}>{tale2.content.p13}</motion.p>

          <motion.p {...animations}>{tale2.content.p14}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p15}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p16}</motion.p>

          <motion.p {...animations}>{tale2.content.p17}</motion.p>

          <motion.p {...animations}>{tale2.content.p18}</motion.p>

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
                alt="Старик возвращается домой со скатертью"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p19}</motion.p>

          <motion.p {...animations}>{tale2.content.p20}</motion.p>

          <motion.p {...animations}>{tale2.content.p21}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p22}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p23}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p24}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p25}</motion.p>

          <motion.p {...animations}>{tale2.content.p26}</motion.p>

          <motion.p {...animations}>{tale2.content.p27}</motion.p>

          <motion.p {...animations}>{tale2.content.p28}</motion.p>

          <motion.div {...animations}>
            <picture className="image">
              <source
                media={`(max-width: ${imageBreakpoint})`}
                srcSet={`${tale2Image4Vert} 1000w`}
              />
              <source
                media={`(min-width: ${imageBreakpoint})`}
                srcSet={`${tale2Image4Hor} 1500w`}
              />
              <img
                src={tale2Image4Hor}
                alt="Дубинка, горшок с золотом и скатерть, полная еды"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p29}</motion.p>

          <motion.p {...animations}>{tale2.content.p30}</motion.p>

          <motion.p {...animations}>{tale2.content.p31}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p32}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p33}</motion.p>

          <motion.p {...animations}>{tale2.content.p34}</motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternUzb3})` }}
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
                alt="Воробей сидит на яблоне"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p3}</motion.p>

          <motion.p {...animations}>{tale3.content.p4}</motion.p>

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
                alt="Осел на бахче в яблоневом саду"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p5}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p6}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p7}</motion.p>

        </section>

        <ToMainPageButton />

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternUzb4})` }}
            className={clsx("pattern")}
          ></div>
        </div>

        <div className={clsx("footer-spacer")}></div>
      </div>
    </>
  );
}

export default Uzb;


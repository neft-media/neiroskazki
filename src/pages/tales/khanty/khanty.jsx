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

import styles from "./khanty.module.css";

// Картинки
import backIcon from '../../../images/to_left.svg';
import patternKhanty1 from '../../../images/khanty/pattern-khanty-1.svg';
import patternKhanty2 from '../../../images/khanty/pattern-khanty-2.svg';
import patternKhanty3 from '../../../images/khanty/pattern-khanty-3.svg';

import singlePatternKhanty from '../../../images/khanty/single-pattern-khanty.svg';

import tale1Image1Hor from "../../../images/khanty/tale1/khant_1_1_h.jpg";
import tale1Image1Vert from "../../../images/khanty/tale1/khant_1_1_v.jpg";
import tale1Image2Hor from "../../../images/khanty/tale1/khant_1_2_h.jpg";
import tale1Image2Vert from "../../../images/khanty/tale1/khant_1_2_v.jpg";
import tale1Image3Hor from "../../../images/khanty/tale1/khant_1_3_h.jpg";
import tale1Image3Vert from "../../../images/khanty/tale1/khant_1_3_v.jpg";

import tale2Image1Hor from "../../../images/khanty/tale2/khant_2_1_h.jpg";
import tale2Image1Vert from "../../../images/khanty/tale2/khant_2_1_v.jpg";
import tale2Image2Hor from "../../../images/khanty/tale2/khant_2_2_h.jpg";
import tale2Image2Vert from "../../../images/khanty/tale2/khant_2_2_v.jpg";
import tale2Image3Hor from "../../../images/khanty/tale2/khant_2_3_h.jpg";
import tale2Image3Vert from "../../../images/khanty/tale2/khant_2_3_v.jpg";

import tale3Image1Hor from "../../../images/khanty/tale3/khant_3_1_h.jpg";
import tale3Image1Vert from "../../../images/khanty/tale3/khant_3_1_v.jpg";
import tale3Image2Hor from "../../../images/khanty/tale3/khant_3_2_h.jpg";
import tale3Image2Vert from "../../../images/khanty/tale3/khant_3_2_v.jpg";
import tale3Image3Hor from "../../../images/khanty/tale3/khant_3_3_h.jpg";
import tale3Image3Vert from "../../../images/khanty/tale3/khant_3_3_v.jpg";



import { tale_1_rus, tale_1_khanty } from "../../../tales/khanty/khanty-1";
import { tale_2_rus, tale_2_khanty } from "../../../tales/khanty/khanty-2";
import { tale_3_rus, tale_3_khanty } from "../../../tales/khanty/khanty-3";


function Khanty() {

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
  const lang2 = "ХАНТ";

  const [tale1IsRus, tale1LangHandler] = useDisclosure(
    ("khantTale1IsRus" in localStorage) ? localStorage.getItem("khantTale1IsRus") === "true" : true
  );

  const [tale2IsRus, tale2LangHandler] = useDisclosure(
    ("khantTale2IsRus" in localStorage) ? localStorage.getItem("khantTale2IsRus") === "true" : true
  );

  const [tale3IsRus, tale3LangHandler] = useDisclosure(
    ("khantTale3IsRus" in localStorage) ? localStorage.getItem("khantTale3IsRus") === "true" : true
  );

  useEffect(() => {
    localStorage.setItem('khantTale1IsRus', tale1IsRus);
  }, [tale1IsRus]);

  useEffect(() => {
    localStorage.setItem('khantTale2IsRus', tale2IsRus);
  }, [tale2IsRus]);

  useEffect(() => {
    localStorage.setItem('khantTale3IsRus', tale3IsRus);
  }, [tale3IsRus]);

  let tale1 = tale_1_rus;
  let tale2 = tale_2_rus;
  let tale3 = tale_3_rus;

  if (!tale1IsRus) {
    tale1 = tale_1_khanty;
  }

  if (!tale2IsRus) {
    tale2 = tale_2_khanty;
  }

  if (!tale3IsRus) {
    tale3 = tale_3_khanty;
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
          backgroundImage: `url(${singlePatternKhanty}), url(${singlePatternKhanty})`,
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
              backgroundImage: `url(${singlePatternKhanty}), url(${singlePatternKhanty})`,
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

        <h1 className={clsx(styles.clr_1, "mt-12")}>Хантыйские сказки</h1>
        <p className={clsx("intro_text", "mt-4")}>
          Название Ханты-Мансийского автономного округа составлено
          из&nbsp;названий двух коренных народов этих мест&nbsp;&mdash; ханты
          и&nbsp;манси. Поэтому нельзя было обойти вниманием и&nbsp;хантыйские
          сказки. Представленные здесь произведения{" "}
          <a href="https://clck.ru/36Ks8p" target='_blank'>собрали и&nbsp;перевели</a>{" "}
          сотрудники Обско-Угорского института прикладных исследований
          и&nbsp;разработок.
        </p>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternKhanty1})` }}
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
              <img src={tale1Image1Hor} alt="Картинка с копающим котом" />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p1}</motion.p>

          <motion.p {...animations}>{tale1.content.p2}</motion.p>

          <motion.p {...animations}>{tale1.content.p3}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p4}
          </motion.p>

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

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p12}
          </motion.p>

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
              <img
                src={tale1Image3Hor}
                alt="Картинка с пирующими белкой и котом"
              />
            </picture>
          </motion.div>
        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternKhanty1})` }}
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
              <img src={tale2Image1Hor} alt="Люди бегут за оленем" />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p2}</motion.p>

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
                alt="Комары-монстры гоняют всех вокруг"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p7}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p8}
          </motion.p>

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
              <img src={tale2Image3Hor} alt="Мир, любовь, люди, олени" />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p11}</motion.p>
        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternKhanty2})` }}
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
              <img src={tale3Image1Hor} alt="Мышка и воробей делают амбар" />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p2}</motion.p>

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
              <img src={tale3Image2Hor} alt="Мышка выгоняет воробья" />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p6}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p7}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p8}</motion.p>

          <motion.p {...animations}>{tale3.content.p9}</motion.p>

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
              <img src={tale3Image3Hor} alt="Суровая сова" />
            </picture>
          </motion.div>
        </section>

        <ToMainPageButton />

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternKhanty3})` }}
            className={clsx("pattern")}
          ></div>
        </div>

        <div className={clsx("footer-spacer")}></div>
      </div>
    </>
  );
}

export default Khanty;


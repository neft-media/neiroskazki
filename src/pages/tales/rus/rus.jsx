import React from 'react';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';

import { useDisclosure } from '@mantine/hooks';

import { Drawer } from '@mantine/core';
import { Burger } from '@mantine/core';

import { motion } from "framer-motion"

import ToMainPageButton from '../../../components/to-main-page-button/to-main-page-button';

import styles from "./rus.module.css";

// Картинки
import backIcon from '../../../images/to_left.svg';

import patternRus1 from '../../../images/rus/pattern-rus-1.svg';
import patternRus2 from '../../../images/rus/pattern-rus-2.svg';
import patternRus3 from '../../../images/rus/pattern-rus-3.svg';
import patternRus4 from '../../../images/rus/pattern-rus-4.svg';

import singlePatternRus1 from '../../../images/rus/single-pattern-rus-1.svg';
import singlePatternRus2 from '../../../images/rus/single-pattern-rus-2.svg';


import tale1Image1Hor from "../../../images/rus/tale1/rus_1_1_h.jpg";
import tale1Image1Vert from "../../../images/rus/tale1/rus_1_1_v.jpg";
import tale1Image2Hor from "../../../images/rus/tale1/rus_1_2_h.jpg";
import tale1Image2Vert from "../../../images/rus/tale1/rus_1_2_v.jpg";

import tale2Image1Hor from "../../../images/rus/tale2/rus_2_1_h.jpg";
import tale2Image1Vert from "../../../images/rus/tale2/rus_2_1_v.jpg";
import tale2Image2Hor from "../../../images/rus/tale2/rus_2_2_h.jpg";
import tale2Image2Vert from "../../../images/rus/tale2/rus_2_2_v.jpg";

import tale3Image1Hor from "../../../images/rus/tale3/rus_3_1_h.jpg";
import tale3Image1Vert from "../../../images/rus/tale3/rus_3_1_v.jpg";
import tale3Image2Hor from "../../../images/rus/tale3/rus_3_2_h.jpg";
import tale3Image2Vert from "../../../images/rus/tale3/rus_3_2_v.jpg";
import tale3Image3Hor from "../../../images/rus/tale3/rus_3_3_h.jpg";
import tale3Image3Vert from "../../../images/rus/tale3/rus_3_3_v.jpg";


import { tale_1_rus } from "../../../tales/rus/rus-1";
import { tale_2_rus } from "../../../tales/rus/rus-2";
import { tale_3_rus } from "../../../tales/rus/rus-3";



function Rus() {

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


  let tale1 = tale_1_rus;
  let tale2 = tale_2_rus;
  let tale3 = tale_3_rus;


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
          backgroundImage: `url(${singlePatternRus1}), url(${singlePatternRus2})`,
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
              backgroundImage: `url(${singlePatternRus1}), url(${singlePatternRus2})`,
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
                  className={clsx(styles.clr_1)}
                  onClick={() => handleScrollTo("firstTale")}
                >
                  {tale1.title}
                </li>
                <li
                  className={clsx(styles.clr_2)}
                  onClick={() => handleScrollTo("secondTale")}
                >
                  {tale2.title}
                </li>
                <li
                  className={clsx(styles.clr_3)}
                  onClick={() => handleScrollTo("thirdTale")}
                >
                  {tale3.title}
                </li>
              </ul>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>

        {/* Заголовок и вводный абзац */}

        <h1 className={clsx(styles.clr_1, "mt-12")}>Русские сказки</h1>
        <p className={clsx("intro_text", "mt-4")}>
          Русские&nbsp;&mdash; самый многочисленный этнос в&nbsp;Югре
          по&nbsp;данным многих переписей населения. Несколько русских народных
          сказок знакомы с&nbsp;детства любому жителю России: это
          &laquo;Репка&raquo;, &laquo;Колобок&raquo;, &laquo;Курочка Ряба&raquo;
          и&nbsp;некоторые другие, в&nbsp;которых заметны повторы действий
          и&nbsp;слов, есть известные зацикленные присказки. Мы&nbsp;подыскали
          менее популярные образцы, чтобы познакомить вас с&nbsp;новыми гранями
          давно знакомой культуры.
        </p>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternRus1})` }}
            className={clsx("pattern")}
          ></div>
        </div>

        {/*-------------- Сказка 1 ----------------*/}

        <section ref={scrollRefs.firstTale} className={clsx("tale")}>

          <motion.h2
            {...animations}
            className={clsx(styles.clr_1, "mt-5")}
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
                alt="Два домика на разных берегах болота"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p2}</motion.p>

          <motion.p {...animations}>{tale1.content.p3}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p4}
          </motion.p>

          <motion.p {...animations}>{tale1.content.p5}</motion.p>

          <motion.p {...animations}>{tale1.content.p6}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p7}
          </motion.p>

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
                alt="Журавль и цапля стоят друг напротив друга"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p9}</motion.p>

          <motion.p {...animations}>{tale1.content.p10}</motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternRus2})` }}
            className={clsx("pattern")}
          ></div>
        </div>

        {/*-------------- Сказка 2 ----------------*/}

        <section ref={scrollRefs.secondTale} className={clsx("tale")}>

          <motion.h2
            {...animations}
            className={clsx(styles.clr_2, "mt-5")}
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
                alt="Медведь грозит кулаком"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p2}</motion.p>

          <motion.p {...animations}>{tale2.content.p3}</motion.p>

          <motion.p {...animations}>{tale2.content.p4}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p5}
          </motion.p>

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
                alt="Куча колосков с выдранными корнями"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p7}</motion.p>

          <motion.p {...animations}>{tale2.content.p8}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p9}
          </motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternRus3})` }}
            className={clsx("pattern")}
          ></div>
        </div>

        {/*-------------- Сказка 3 ----------------*/}

        <section ref={scrollRefs.thirdTale} className={clsx("tale")}>

          <motion.h2
            {...animations}
            className={clsx(styles.clr_3, "mt-5")}
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
                alt="Сердитый Федул"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p5}</motion.p>

          <motion.p {...animations}>{tale3.content.p6}</motion.p>

          <motion.p {...animations}>{tale3.content.p7}</motion.p>

          <motion.p {...animations}>{tale3.content.p8}</motion.p>

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
                alt="Федул с выпученными глазами в дыму"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p11}</motion.p>

          <motion.p {...animations}>{tale3.content.p12}</motion.p>

          <motion.p {...animations}>{tale3.content.p13}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p14}
          </motion.p>

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
                alt="Уставшая Маланья держит на руках ребенка"
              />
            </picture>
          </motion.div>

        </section>

        <ToMainPageButton />

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternRus4})` }}
            className={clsx("pattern")}
          ></div>
        </div>

        <div className={clsx("footer-spacer")}></div>
      </div>
    </>
  );
}

export default Rus;


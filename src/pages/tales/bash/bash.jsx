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

import styles from "./bash.module.css";

// Картинки
import backIcon from '../../../images/to_left.svg';

import patternBash1 from '../../../images/bash/pattern-bash-1.svg';
import patternBash2 from '../../../images/bash/pattern-bash-2.svg';
import patternBash3 from '../../../images/bash/pattern-bash-3.svg';
import patternBash4 from '../../../images/bash/pattern-bash-4.svg';

import singlePatternBash1 from '../../../images/bash/single-pattern-bash-1.svg';
import singlePatternBash2 from '../../../images/bash/single-pattern-bash-2.svg';


import tale1Image1Hor from "../../../images/bash/tale1/bash_1_1_h.jpg";
import tale1Image1Vert from "../../../images/bash/tale1/bash_1_1_v.jpg";
import tale1Image2Hor from "../../../images/bash/tale1/bash_1_2_h.jpg";
import tale1Image2Vert from "../../../images/bash/tale1/bash_1_2_v.jpg";
import tale1Image3Hor from "../../../images/bash/tale1/bash_1_3_h.jpg";
import tale1Image3Vert from "../../../images/bash/tale1/bash_1_3_v.jpg";

import tale2Image1Hor from "../../../images/bash/tale2/bash_2_1_h.jpg";
import tale2Image1Vert from "../../../images/bash/tale2/bash_2_1_v.jpg";
import tale2Image2Hor from "../../../images/bash/tale2/bash_2_2_h.jpg";
import tale2Image2Vert from "../../../images/bash/tale2/bash_2_2_v.jpg";
import tale2Image3Hor from "../../../images/bash/tale2/bash_2_3_h.jpg";
import tale2Image3Vert from "../../../images/bash/tale2/bash_2_3_v.jpg";

import tale3Image1Hor from "../../../images/bash/tale3/bash_3_1_h.jpg";
import tale3Image1Vert from "../../../images/bash/tale3/bash_3_1_v.jpg";
import tale3Image2Hor from "../../../images/bash/tale3/bash_3_2_h.jpg";
import tale3Image2Vert from "../../../images/bash/tale3/bash_3_2_v.jpg";
import tale3Image3Hor from "../../../images/bash/tale3/bash_3_3_h.jpg";
import tale3Image3Vert from "../../../images/bash/tale3/bash_3_3_v.jpg";


import { tale_1_rus, tale_1_bash } from "../../../tales/bash/bash-1";
import { tale_2_rus, tale_2_bash } from "../../../tales/bash/bash-2";
import { tale_3_rus, tale_3_bash } from "../../../tales/bash/bash-3";



function Bash() {

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
  const lang2 = "БАШ";

  const [tale1IsRus, tale1LangHandler] = useDisclosure(
    ("bashTale1IsRus" in localStorage) ? localStorage.getItem("bashTale1IsRus") === "true" : true
  );

  const [tale2IsRus, tale2LangHandler] = useDisclosure(
    ("bashTale2IsRus" in localStorage) ? localStorage.getItem("bashTale2IsRus") === "true" : true
  );

  const [tale3IsRus, tale3LangHandler] = useDisclosure(
    ("bashTale3IsRus" in localStorage) ? localStorage.getItem("bashTale3IsRus") === "true" : true
  );

  useEffect(() => {
    localStorage.setItem('bashTale1IsRus', tale1IsRus);
  }, [tale1IsRus]);

  useEffect(() => {
    localStorage.setItem('bashTale2IsRus', tale2IsRus);
  }, [tale2IsRus]);

  useEffect(() => {
    localStorage.setItem('bashTale3IsRus', tale3IsRus);
  }, [tale3IsRus]);

  let tale1 = tale_1_rus;
  let tale2 = tale_2_rus;
  let tale3 = tale_3_rus;

  if (!tale1IsRus) {
    tale1 = tale_1_bash;
  }

  if (!tale2IsRus) {
    tale2 = tale_2_bash;
  }

  if (!tale3IsRus) {
    tale3 = tale_3_bash;
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
          backgroundImage: `url(${singlePatternBash1}), url(${singlePatternBash2})`,
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
              backgroundImage: `url(${singlePatternBash1}), url(${singlePatternBash2})`,
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

        <h1 className={clsx(styles.clr_1, "mt-12")}>Башкирские сказки</h1>
        <p className={clsx("intro_text", "mt-4")}>
          В&nbsp;Башкирии, как и&nbsp;в&nbsp;Югре, добывают нефть.
          С&nbsp;середины&nbsp;XX века многие специалисты из&nbsp;этой
          республики перебираются на&nbsp;север, чтобы работать, а&nbsp;затем
          остаются здесь жить постоянно, создавая нефтяные династии.
          За&nbsp;помощь с&nbsp;поиском сказок для этого раздела
          мы&nbsp;благодарим <span className="bold">Раудата Кульманбетова</span>, который возглавляет
          региональную организацию &laquo;Курултай (конгресс) башкир
          ХМАО&raquo;, и&nbsp;<span className="bold">Ларису Абдуллину</span>&nbsp;&mdash; главного редактора
          детского журнала на&nbsp;башкирском языке&nbsp;
          <a href="https://vk.com/journal_akbuzat" target="_blank" className="refWithQuotes">
            <span className="refQoutes">&laquo;</span>
            <span className="refText">Аҡбуҙат</span>
            <span className="refQoutes">&raquo;</span>
          </a>.
        </p>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternBash1})` }}
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

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p2}
          </motion.p>

          <motion.p {...animations}>{tale1.content.p3}</motion.p>

          <motion.p {...animations}>{tale1.content.p4}</motion.p>

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
                alt="Человек в халате и чалме улыбается"
              />
            </picture>
          </motion.div>

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
                alt="Заяц убегает в чащу леса по дорожке"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p10}</motion.p>

          <motion.p {...animations}>{tale1.content.p11}</motion.p>

          <motion.p {...animations}>{tale1.content.p12}</motion.p>

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
                alt="Длинный стол, на котором много еды: мясо, орехи, есть улей с медом и вёдра с молоком"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale1.content.p13}</motion.p>

          <motion.p {...animations}>{tale1.content.p14}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale1.content.p15}
          </motion.p>

          <motion.p {...animations}>{tale1.content.p16}</motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternBash2})` }}
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
                alt="Мужчина на берегу, среди камышей опускает веревку в озеро"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p3}</motion.p>

          <motion.p {...animations}>{tale2.content.p4}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p5}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p6}</motion.p>

          <motion.p {...animations}>{tale2.content.p7}</motion.p>

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
                alt="Медведь спит в кустах на берегу озера"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p9}</motion.p>

          <motion.p {...animations}>{tale2.content.p10}</motion.p>

          <motion.p {...animations}>{tale2.content.p11}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale2.content.p12}
          </motion.p>

          <motion.p {...animations}>{tale2.content.p13}</motion.p>

          <motion.p {...animations}>{tale2.content.p14}</motion.p>

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
                alt="Конь золотого цвета стоит у озера"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale2.content.p15}</motion.p>

          <motion.p {...animations}>{tale2.content.p16}</motion.p>

        </section>

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternBash3})` }}
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
                alt="Медведь отгоняет пчёл от улья с мёдом"
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
                alt="Медведь убегает в лес на четырех лапах"
              />
            </picture>
          </motion.div>

          <motion.p {...animations}>{tale3.content.p7}</motion.p>

          <motion.p {...animations}>{tale3.content.p8}</motion.p>

          <motion.p {...animations}>{tale3.content.p9}</motion.p>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p10}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p11}</motion.p>

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
                alt="Пчёлы летают вокруг улья с мёдом"
              />
            </picture>
          </motion.div>

          <motion.p {...animations} className={clsx("big_text")}>
            {tale3.content.p12}
          </motion.p>

          <motion.p {...animations}>{tale3.content.p13}</motion.p>

          <motion.p {...animations}>{tale3.content.p14}</motion.p>

        </section>

        <ToMainPageButton />

        <div className={clsx("pattern_wrapper")}>
          <div
            style={{ backgroundImage: `url(${patternBash4})` }}
            className={clsx("pattern")}
          ></div>
        </div>

        <div className={clsx("footer-spacer")}></div>
      </div>
    </>
  );
}

export default Bash;


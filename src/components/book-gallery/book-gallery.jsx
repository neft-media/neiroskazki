import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { flushSync } from 'react-dom';
import {
  DotButton,
  PrevButton,
  NextButton
} from '../gallery-buttons/gallery-buttons';

import Book from '../book/book';

// Коэффициент масштабирования для книг.
// Чем больше значение, тем меньше будут неактивные книги.
const TWEEN_FACTOR = 1.2

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const BookGallery = (props) => {

  const { books, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState([]);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      let tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)

      // Чтобы книги по бокам были одного размера
      if (tweenValue <= 0.75) {
        tweenValue = 0.75
      }
      return numberWithinRange(tweenValue, 0, 1)

    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return

    onScroll()
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])


  return (
    <div className="book-gallery mt-12">
      <div className="embla">

        <div className="embla__viewport" ref={emblaRef}>

          <div className="embla__container">
            {books.map((book, index) => (
              <div className="embla__slide" key={index}>
                <div
                  className="embla__scale"
                  style={{
                    ...(tweenValues.length && {
                      transform: `scale(${tweenValues[index]})`
                    })
                  }}
                >
                  <Book key={book.id} book={book} />
                </div>
              </div>

            ))}
          </div>

          <div className="embla__dots mt-8">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => scrollTo(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>

        </div>

        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        <div className="side-glow glow-left"></div>
        <div className="side-glow glow-right"></div>

      </div>
    </div>
  )
}

export default BookGallery

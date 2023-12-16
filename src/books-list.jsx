import mansiShape from "./images/books/mansi-shape.svg";
import mansiCover from "./images/books/mansi-cover.jpg";

import rusShape from "./images/books/rus-shape.svg";
import rusCover from "./images/books/rus-cover.jpg";

import khantyShape from "./images/books/khanty-shape.svg";
import khantyCover from "./images/books/khanty-cover.jpg";

import ukrShape from "./images/books/ukr-shape.svg";
import ukrCover from "./images/books/ukr-cover.jpg";

import tatShape from "./images/books/tat-shape.svg";
import tatCover from "./images/books/tat-cover.jpg";

import tadShape from "./images/books/tad-shape.svg";
import tadCover from "./images/books/tad-cover.jpg";

import bashShape from "./images/books/bash-shape.svg";
import bashCover from "./images/books/bash-cover.jpg";

const booksList = [
  {
    id: 1,
    nation: "Манси",
    link: "/tales/mansi",
    pattern: mansiShape,
    cover: mansiCover,
    styles: {
      background: "linear-gradient(0deg, #5487B6 -2.21%, #B1D5F6 100.6%)",
      boxShadow: "0px 17px 12px -10px rgba(58, 99, 148, 0.80)"
    },
  },
  {
    id: 2,
    nation: "Русские",
    link: "/tales/rus",
    pattern: rusShape,
    cover: rusCover,
    styles: {
      background: "linear-gradient(0deg, #B9A96F -2.21%, #EEE7CE 100.6%)",
      boxShadow: "0px 17px 12px -10px rgba(140, 129, 91, 0.80)"
    },
  },
  {
    id: 3,
    nation: "Ханты",
    link: "/tales/khanty",
    pattern: khantyShape,
    cover: khantyCover,
    styles: {
      background: "linear-gradient(0deg, #5DB79C -2.21%, #9AEBF0 100.6%)",
      boxShadow: "0px 17.461px 11.641px -9.313px rgba(69, 158, 132, 0.80)"
    },
  },
  {
    id: 4,
    nation: "Украинцы",
    link: "/tales/ukr",
    pattern: ukrShape,
    cover: ukrCover,
    styles: {
      background: "linear-gradient(0deg, #A7452F -2.21%, #FFBF74 100.6%)",
      boxShadow: "0px 17px 12px -10px rgba(140, 112, 91, 0.80)"
    },
  },
  {
    id: 5,
    nation: "Татары",
    link: "/tales/tat",
    pattern: tatShape,
    cover: tatCover,
    styles: {
      background: "linear-gradient(0deg, #2F7CA7 -2.21%, #FF74AE 100.6%)",
      boxShadow: "0px 17px 12px -10px rgba(91, 111, 140, 0.80)"
    },
  },
  {
    id: 6,
    nation: "Таджики",
    link: "/tales/tad",
    pattern: tadShape,
    cover: tadCover,
    styles: {
      background: "linear-gradient(0deg, #6BA72F -2.21%, #FF9E74 100.6%)",
      boxShadow: "0px 17px 12px -10px rgba(101, 140, 91, 0.80)"
    },
  },
  {
    id: 7,
    nation: "Башкиры",
    link: "/tales/bash",
    pattern: bashShape,
    cover: bashCover,
    styles: {
      background: "linear-gradient(0deg, #2F51A7 -2.21%, #74D5FF 100.6%)",
      boxShadow: "0px 17px 12px -10px rgba(91, 111, 140, 0.80)"
    },
  },
]

export default booksList;

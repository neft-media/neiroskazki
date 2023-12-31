import React from "react";

import CustomTooltip from "../../components/custom-tooltip/custom-tooltip";

const tale_2_rus = {
  title: <>Чукмар и&nbsp;Тукмар</>,
  id: "02",
  content: {
    p0: (
      <>
        Жили у&nbsp;бабушки два петуха: один белый, другой черный. Очень любила
        бабушка обоих петухов.
      </>
    ),
    p1: (
      <>
        Только были они большие забияки, всегда дрались до&nbsp;крови. Поэтому
        белого петуха бабушка назвала{" "}
        <CustomTooltip
          highlightedText={<>Чукмар</>}
          term="Чукмар"
          definition={
            <>&nbsp;на&nbsp;татарском значит &laquo;дубинка&raquo;.</>
          }
        />
        {", "}
        а&nbsp;черного{" "}
        <CustomTooltip
          highlightedText={<>Тукмар</>}
          term="Тукмар"
          definition={
            <>&nbsp;на&nbsp;татарском значит &laquo;колотушка&raquo;.</>
          }
        />
        {". "}
      </>
    ),
    p2: (
      <>
        Начнет бабушка петухов кормить. Белый кричит: &laquo;Почему мне мало
        корму?&raquo; А&nbsp;черный вторит: &laquo;Зачем клюешь мое
        зерно?&raquo; И&nbsp;готова драка.
      </>
    ),
    p3: (
      <>
        Однажды бабушка вышла во&nbsp;двор, смотрит: петухи дерутся. &laquo;Что
        мне с&nbsp;ними делать?&raquo;&nbsp;&mdash; подумала она.
      </>
    ),
    p4: (
      <>
        Пожурила драчунов, прикрикнула на&nbsp;них. Петухи при&shy;тихли,
        а&nbsp;как только бабушка ушла, опять накинулись друг на&nbsp;друга.
        Только перья летят.
      </>
    ),
    p5: (
      <>
        Устали драться, пошли жаловаться бабушке. Чукмар ябедничает:
        <br />
        &mdash;&nbsp;Бабушка, бабушка, Тукмар меня исколотил. Я&nbsp;весь
        в&nbsp;синяках.
      </>
    ),
    p6: (
      <>
        Тукмар петух кричит:
        <br />
        &mdash;&nbsp;Не&nbsp;верь ему, бабушка, Чукмар сам меня исклевал.
      </>
    ),
    p7: (
      <>
        Бабушке надоели драки и&nbsp;жалобы. Она ничего не&nbsp;сказала, взяла
        черного петуха под мышку и&nbsp;пошла с&nbsp;ним куда-то. &laquo;Попаду
        я&nbsp;сегодня в&nbsp;суп&raquo;,&nbsp;&mdash; подумал Тукмар, сидя
        у&nbsp;бабушки под мышкой.
      </>
    ),
    p8: (
      <>
        А&nbsp;бабушка отнесла черного петуха к&nbsp;соседям и&nbsp;оставила его
        там на&nbsp;три дня и&nbsp;три ночи.
      </>
    ),
    p9: (
      <>
        Скучно стало белому петуху Чукмару. Не&nbsp;ест, не&nbsp;пьет.
        На&nbsp;четвертый день говорит он&nbsp;бабушке:
        <br />
        &mdash;&nbsp;Бабушка, принеси Тукмара. Скучно мне без него. Никогда
        больше не&nbsp;буду с&nbsp;ним драться.
      </>
    ),
    p10: (
      <>
        &mdash;&nbsp;Ладно. Если так, принесу. Только, чур, не&nbsp;драться,
        а&nbsp;то&nbsp;один из&nbsp;вас угодит в&nbsp;суп,&nbsp;&mdash; так
        сказала бабушка и&nbsp;принесла домой черного петуха.
      </>
    ),
    p11: (
      <>
        А&nbsp;черный тоже соскучился у&nbsp;соседей. Обрадова&shy;лись петухи
        и&nbsp;дали друг другу слово никогда больше не&nbsp;драться.
      </>
    ),
    p12: (
      <>
        Теперь Тукмар и&nbsp;Чукмар живут друж&shy;но, и&nbsp;только
        их&nbsp;имена&nbsp;&mdash; Колотушка и&nbsp;Дубинка&nbsp;&mdash;
        напоминают их&nbsp;прежние шалости.
      </>
    ),
  },
};

const tale_2_tat = {
  title: "Чукмар белэн Тукмар",
  id: "02",
  content: {
    p0: (
      <>
        Бер әбинең ике әтәче булган. Бу&nbsp;әтәчләрнең берсе&nbsp;&mdash; ак,
        берсе кара икән. Ул&nbsp;аларның икесен дә&nbsp;бертигез ярата икән.
      </>
    ),
    p1: (
      <>
        Әтәчләр күп вакытларын сугышып үткәрәләр, сугышырга тотынсалар, канга
        батып бетәләр икән. Ак&nbsp;әтәчкә әби Чукмар дип кушкан, карасын Тукмар
        дип атаган. Чукмар чукырга бик оста, ә&nbsp;Тукмар бик оста тукый икән.
      </>
    ),
    p2: (
      <>
        Әби ашатырга тотынса: &laquo;Җимне миңа әзрәк бирдең&raquo;, &laquo;Ник
        минем өлешемә кердең?&raquo;&nbsp;&mdash; дип кычкырыша башлыйлар икән
        әтәчләр. Әйтешеп-әйтешеп кенә калмыйлар икән, шунда ук&nbsp;сугыша
        да&nbsp;башлыйлар икән. Чукмары канга батырганчы чукырга, Тукмары
        күгәрткәнче тукмарга тотына икән.
      </>
    ),
    p3: (
      <>
        Бердәнбер көнне бу&nbsp;әтәчләр шулай бик каты кычкырышканнар һәм канга
        батканчы сугышканнар. Әбинең моны күреп бик ачуы килгән. &laquo;Боларны
        ни&nbsp;эшләтим икән?&raquo;&nbsp;&mdash; дигән.
      </>
    ),
    p4: (
      <>
        Тегеләрне бик каты орышкан, сугышмаска кушкан. Тегеләр әби алдында бераз
        тынычланып торганнар, әби аларның күзләреннән югалгач, тагын сугышырга
        тотынганнар.
      </>
    ),
    p5: (
      <>
        Әби килеп җитсә, Чукмар исемле ак&nbsp;әтәч йөгереп килеп:
        <br />
        &mdash;&nbsp;Әби, әби, кара әле, Тукмарың тукмый-тукмый башымны күгәртеп
        бетерде,&nbsp;&mdash; дип әләкли икән.
      </>
    ),
    p6: (
      <>
        Тукмар исемле кара әтәч тә&nbsp;энесеннән калышмый:
        <br />
        &mdash;&nbsp;Башымны кара әле, әби, Чукмарың чукый-чукый канатып
        бетерде,&nbsp;&mdash; ди&nbsp;икән.
      </>
    ),
    p7: (
      <>
        Әби аларның әләкләүләреннән дә&nbsp;туйган. Ул&nbsp;бер сүз
        дә&nbsp;әйтмәгән, Тукмарны култыгына кыстырган да&nbsp;каядыр күтәреп
        киткән. &laquo;Суярга алып китә, ахры, мине&raquo;,&nbsp;&mdash; дип
        курыккан Тукмар.
      </>
    ),
    p8: (
      <>
        Ләкин әби аны күршеләргә генә кертеп торган. Ул&nbsp;әтәч шунда
        өч&nbsp;кич кунган.
      </>
    ),
    p9: (
      <>
        Ялгыз калгач, Чукмарга бик күңелсез булган, аның күңеле тулган. Юньләп
        ашый&nbsp;да, эчә дә&nbsp;алмаган. Әбигә ул: &laquo;Тукмарны алып
        кайтсана, инде бер дә&nbsp;сугышмас идек&raquo;,&nbsp;&mdash;
        ди&nbsp;икән.
      </>
    ),
    p10: (
      <>
        &laquo;Ярый, алып кайтсам-кайтыйм, әгәр тагын сугыша торган булсагыз,
        ул&nbsp;вакыт тотам да&nbsp;берегезне бөтенләй
        юк&nbsp;итәм&raquo;,&nbsp;&mdash; дип куркытыл куйган һәм күршедәге
        Тукмарны алып кайткан.
      </>
    ),
    p11: (
      <>
        Тукмар да&nbsp;Чукмарны бик сагынган булган, алар күптәннән бирле
        күрешмәгән туганнар төсле, кочаклашып исәнләшкәннәр һәм киләчәктә бер
        дә&nbsp;сугышмаска сүз бирешкәннәр.
      </>
    ),
    p12: (
      <>
        Хәзер инде алар бик тату яшиләр икән, тик аларга кушылган исемнәр генә
        аларның электәге шуклыкларын күрсәтеп, исләренә төшереп тора икән.
      </>
    ),
  },
};

export { tale_2_rus, tale_2_tat }

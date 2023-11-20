import CustomTooltip from "../../components/custom-tooltip/custom-tooltip"

const tale_2_rus = {
  title: <>Как появились комары</>,
  id: "02",
  content: {
    p0:
    <>
      Это было очень давно. Много времени прошло, много воды утекло. {' '}
      <CustomTooltip
        highlightedText={<><nobr>Торум-Ащи</nobr></>}
        term="Торум"
        definition={<>&nbsp;&mdash;&nbsp;это имя создателя мира у&nbsp;хантов; <nobr>Торум-Ащи</nobr> можно перевести как <nobr>Бог-Отец</nobr></>}
      />
      {' '}создал землю для жизни.
    </>,

  }
}

const tale_2_khanty = {
  title: "Хуты ԓаӈки кămи пиԓа вөсӈән",
  content: {
    p0:
    <>
      Ԓаӈки кămи ԓөхәсәԓән вөԓԓаӈән. Тăԓаӈ ԓўӈ йăха вөсӈән. Сўса йис. Ищка йиты питәс. Ԓоњщ питты питәс. Ԓаӈки лупәԓ:<br/>
      &mdash;&nbsp; Ԓөхәс, хот вєрты мосәԓ. Ищка йис.<br/>
      Кămи лупәԓ:<br/>
      &mdash;&nbsp;Хот хуԓты вєрты?<br/>
      &mdash;&nbsp;Йўх өхтыйән вєрты мосәԓ.<br/>
      &mdash;&nbsp;Мăнєм ԓавәрт нух хөӈхийәԓты. Ищка йиԓ, йошԓам потԓайәт. Мўв хот вєрԓәмǝн.<br/>
      &mdash;&nbsp;Мўв хот хуйән вєрԓа?<br/>
      &mdash;&nbsp;Ма хирԓәм. Ма хошԓәм.

    </>,

  }
}

export { tale_2_rus, tale_2_khanty }

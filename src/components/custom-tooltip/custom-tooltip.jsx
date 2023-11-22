import { useState } from 'react';

import clsx from 'clsx';

import { Tooltip } from '@mantine/core';

import { useClickOutside } from '@mantine/hooks';

import styles from "./custom-tooltip.module.css";

const tooltipProps = {
  withArrow: true,
  inline: true,
  multiline: true,
  arrowSize: "12",
  transitionProps:{ transition: 'pop', duration: 300 }
}

const definitionStyles = {
  backgroundColor: "#323648",
  width: "400px",
  maxWidth: "80%",
  border: "none",
  borderRadius: "10px",
  color: "#fff",
  paddingTop: "15px",
  paddingBottom: "15px",
  paddingInline: "24px",
  fontSize: "18px",
  lineHeight: "1.4"
}

function CustomPopover({highlightedText, term, definition}) {

  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  const definitionFull = <>
    {term && <span className={styles.term}>{term}</span>}{definition}
  </>

  return (
    <Tooltip
      label={definitionFull} opened={opened} {...tooltipProps}
      styles={{
        tooltip: {...definitionStyles}
      }}
    >
        <span
          ref={ref}
          className={clsx(styles.highlightedText, opened && styles.active)}
          onClick={() => setOpened((o) => !o)}
        >
          {highlightedText}
        </span>
    </Tooltip>
  );
}

export default CustomPopover;

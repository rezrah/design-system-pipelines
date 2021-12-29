import React, { MouseEventHandler, FC, ReactNode } from "react";

import styles from "@rezrah/css/dist/button/button.css";

import buttonData from "@rezrah/design-tokens/dist/colours/components/button/js/light.module";

type Variants = keyof typeof buttonData.btn;

interface ButtonProps {
  type?: Variants;
  useGlobalStylesheet?: boolean;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
  type,
  children,
  onClick,
  useGlobalStylesheet = false,
}) => {
  const globalClasses = type ? `btn btn-${String(type)}` : "btn";
  const moduleClasses = type
    ? `${styles.btn} ${styles[`btn-${String(type)}`]}`
    : styles.btn;
  const classes = useGlobalStylesheet ? globalClasses : moduleClasses;

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

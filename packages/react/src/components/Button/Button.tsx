import React, { MouseEventHandler, FC, ReactNode } from "react";

import styles from "@rezrah/css/dist/button/button.css";

import buttonData from "@rezrah/design-tokens/dist/colours/components/button/js/light.module";

type Variants = keyof typeof buttonData.btn;

interface ButtonProps {
  type?: Variants;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${type ? styles[`btn-${String(type)}`] : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

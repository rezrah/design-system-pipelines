import { MouseEventHandler, FC, ReactNode } from "react";
import buttonData from "@rezrah/design-tokens/dist/colours/components/button/js/light.module";
declare type Variants = keyof typeof buttonData.btn;
interface ButtonProps {
    type?: Variants;
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: FC<ButtonProps>;
export default Button;

import type { ButtonProps } from "react-aria-components";
import { Button as AriaButton } from "react-aria-components";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <AriaButton
      {...props}
      type="button"
      className="bg-slate-700 px-4 py-2 rounded-sm text-white border-0"
    >
      {children}
    </AriaButton>
  );
};

export default Button;

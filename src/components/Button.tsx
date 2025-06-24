import type { ButtonProps } from "react-aria-components";
import { Button as AriaButton } from "react-aria-components";

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<AriaButton {...props} type="button">
			{children}
		</AriaButton>
	);
};

export default Button;

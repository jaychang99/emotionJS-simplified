import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "danger" | "primary";
}

function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;

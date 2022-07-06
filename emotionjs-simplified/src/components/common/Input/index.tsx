import { HTMLAttributes } from "react";
import { StyledInput, StyledInputLabel } from "./styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

function Input({ children, label, ...props }: Props) {
  return (
    <>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
      <StyledInput {...props}></StyledInput>
    </>
  );
}

export default Input;

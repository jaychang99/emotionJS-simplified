import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

function Input({ ...props }: Props) {
  return <p>inputComponent</p>;
}

export default Input;

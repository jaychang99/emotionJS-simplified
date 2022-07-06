import styled from "@emotion/styled";

export const StyledInput = styled.input`
  outline: none;
  padding: 15px 18px 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  color: ${(props) => props.theme.color.black};
  font: inherit;
  border: 1px solid ${(props) => props.theme.color.primary700};
  border-radius: 8px;
  width: 100%;
  background-color: ${(props) => props.theme.color.white};
  &::placeholder {
    color: ${(props) => props.theme.color.primary500};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px ${(props) => props.theme.color.primary500};
  }
`;

export const StyledInputLabel = styled.span`
  font-size: 14px;
  margin-bottom: 4px;
  display: block;
  color: ${(props) => props.theme.color.primary700};
  text-align: left;
  width: 100%;
`;

import styled from "@emotion/styled";
import Input from "../components/common/Input";

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function InputPage() {
  return (
    <Container>
      <Input label="이메일" placeholder="이메일을 입력하세요" />
      <Input placeholder="이메일을 입력하세요" />
    </Container>
  );
}

export default InputPage;

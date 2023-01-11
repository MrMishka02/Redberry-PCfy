import styled from "styled-components";

const StyledButton = styled.button`
  width: 387px;
  height: 60px;
  background: #62A1EB;
  border-radius: 8px;
  margin-bottom: 26px;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 20.5px;
  line-height: 24px;
  color: #FFFFFF;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #317AD0;
  }
  :active{
    cursor: pointer;
    background-color: #1A5DAB;
  }
`

function Button({text}) {
  return (
    <StyledButton>{text}</StyledButton>
  );
}

export default Button;
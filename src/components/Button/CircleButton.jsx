import styled from "styled-components";

const StyledCircleBtn = styled.button`
  position: absolute;
  left: 70px;
  top: 53px;
  width: 54px;
  height: 54px;
  background: #D9D9D9;
  color: #2E2E2E;
  font-size: 22px;
  border-radius: 50%;
  border: none;
  :hover{
    cursor: pointer;
  }
`

function CircleButton() {
    return (
      <StyledCircleBtn>&#x276E;</StyledCircleBtn>
    );
  }

  export default CircleButton;
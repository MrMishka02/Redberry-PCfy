import styled from "styled-components";

const StyledHeadLabel = styled.p`
    width: 322px;
    height: 24px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 24px;
    color: #232323;
`

function HeadLabel({text}) {
    return (
        <StyledHeadLabel>{ text }</StyledHeadLabel>
    );
}

export default HeadLabel
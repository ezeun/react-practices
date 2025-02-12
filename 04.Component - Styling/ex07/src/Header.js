import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    width: 280px;
    color: red;
`;
function Header(props) {
    return (
        <StyledH1>SASS & SCSS</StyledH1>
    );
}

export default Header;
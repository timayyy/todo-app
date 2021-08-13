import React from 'react'
import styled from "styled-components";


const StyledHeader = styled.div`
h1 {
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
}
`

const Header = () => {
    return (
        <StyledHeader>
            <h1>todos</h1>
        </StyledHeader>
    )
}

export default Header

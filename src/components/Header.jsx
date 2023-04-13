import styled from "styled-components"

function Header(){
    return( 
    <HeaderStyled>
        This is the Header    
    </HeaderStyled> 
    )
}

export default Header;

const HeaderStyled = styled.header`
    background-color: brown;
    height: 80px;
`
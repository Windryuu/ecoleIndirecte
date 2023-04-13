import styled from "styled-components";

function Sidebar(){
    return(
        <StyledSidebar>
            <a href="/">Lien 1</a>
            <br />
            <a href="/bleep">Lien 2</a>
        </StyledSidebar>
    )
}

export default Sidebar;

const StyledSidebar = styled.div`
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: black;
    overflox-x: hidden;
    padding-top: 20px;
`
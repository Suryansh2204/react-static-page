import styled, { StyledComponent } from "styled-components"
export default function Navbar(){
    return(
        <>
            <Wrapper>
                <Logo src='/logo192.png'></Logo>
                <LogoText>ReactFacts</LogoText>
                <SideText>React Course - Project 1</SideText>
            </Wrapper>
        </>
    )
}

const Wrapper=styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    background-color: #21222A;
`;

const Logo=styled.img`
    height: 35px;
    width: 35px;
    margin-left: 25px;
`;

const LogoText=styled.h2`
    color: #61DAFB;
    margin-left: 10px;
    margin-right: auto;
`;

const SideText=styled.p`
    font-size: 20px;
    color: #DEEBF8;
    align-items: flex-end;
    margin-right: 1em;
`;
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const scdTitle = styled.div`
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 3rem;
    margin-right: 1rem;
`

export const Image = styled.img`
    width: 6rem;
    height: 6rem;
`;

export const Paragraph = styled.h2`
    font-size: 30px;
    font-weight: bold;
`

export const LinkWrap = styled.div`
    background-color: #1F88FF;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 5rem;
    margin : 0 auto;
    box-shadow: 0rem 0.5rem 1rem rgba(0,0,0,0.3);
`
export const Link = styled(NavLink)`
    text-decoration: none;
    font-size: 2rem;
    font-weight: 600;
    color: black;
`;

export const ContentsLogoWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 24rem;
    margin : 0 auto;
    border-bottom: 3px solid #1F88FF;
`;
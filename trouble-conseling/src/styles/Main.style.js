import styled from "styled-components";

export const Content = styled.div`
    padding-top: 80px;
    padding-bottom: 300px;
    display: flex;
    flex-direction: column-reverse;
`

export const MyContent = styled.div`
    width: 80%;
    margin-left: 300px;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    align-items: end;
    flex-direction: column;
`

export const AiContent = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: left;
    align-items: start;
    margin-left: 100px;
`

export const MyProfile = styled.img`
    margin-bottom: 20px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: #A5C4FF;
`

export const AiProfile = styled.img`
    margin-bottom: 20px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: #D9D9D9;
`
export const Input = styled.input`
    width: 50%;
    height: 70px;
    font-size: 24px;
    color: black;
    background-color: #A5C4FF;
    border-radius: 20px;
    border: none;
    padding-left: 30px;
    bottom : 15%;
    margin-left: 22%;
    position: fixed;
`
export const SendImg = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 10px;
    padding: 5px;
    background-color: #ffffff;
    bottom : 16.5%;
    margin-left: 70%;
    position: fixed;
    cursor: pointer;
`
export const MyText = styled.p`
    background-color: #A5C4FF;
    padding: 10px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
`
export const AiText = styled.p`
    background-color: #D9D9D9;
    padding: 10px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
`
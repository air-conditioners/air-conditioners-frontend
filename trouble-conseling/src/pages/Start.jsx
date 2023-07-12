import React from "react";
import Layout from "./Layout";
import * as S from '../styles/Start'
import Logo from '../img/logo.png'
import '../styles/Start.css'

const Start = () => {
    return (
        <div>
            <Layout>
            <br/>
            <br/>
            <br/>
            <br/>
            <S.ContentsLogoWrap>
                <S.scdTitle>
                  수호천사
                </S.scdTitle>
                <S.Image src={Logo} alt='Logo' className="startImg"/>
            </S.ContentsLogoWrap>
                <br/>
                <br/>
                <br/>
                <S.Paragraph>
                    <h2>첫 방문이신가요?</h2><br/><br/>
                    <h2>아래 버튼을 눌러,</h2><br/>
                    <h2>고민을 해결해 보세요!!</h2><br/>
                </S.Paragraph>
                <S.LinkWrap>
                    <S.Link to="/main">
                        고민 해결하러 가기
                    </S.Link>
                </S.LinkWrap>
            </Layout>
        </div>
    )
}

export default Start;
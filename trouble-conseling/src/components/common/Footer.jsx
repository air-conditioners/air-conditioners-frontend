import React from "react";
import * as F from "../../styles/Footer.style"
import Msg from "../../img/message.png"
import {useEffect, useState} from "react";

const Footer = () => {
    
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetchData(); // 컴포넌트가 마운트될 때 데이터를 가져옴
    // }, []);

    // const fetchData = () => {
    //     fetch('서버 URL',{method:GET}) // 실제 서버의 URL로 변경해야 함
    //     .then(response => response.json())
    //     .then(data => setData(data.body))
    //     .catch(error => console.log(error));
    // };
    
    return (
        <F.Footer>
            <F.Content>
                <F.Msg src={Msg} alt=""/>
                <F.Text>지석이를 보면 못참겠어요...</F.Text>
            </F.Content>
        </F.Footer>
    )
}

export default Footer;
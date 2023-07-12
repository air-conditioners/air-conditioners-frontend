import React from 'react';
import * as M from "../../styles/Main.style"
import { useState } from "react";
import Person from "../../img/person.png"
import Send from "../../img/send.png"
import axios from 'axios'

const Main = () => {
    const [people, setPeople] = useState([
        {
            questionMessage: ''
        }, {
            replyMessage: ''
        }
    ])

    const [formData, setFormData] = useState('');

    const handleChange = (e) => {
        setFormData(e.target.value);
    };

    async function saveData() {
        if (formData != "") {
            try {
                // POST 요청을 보낼 데이터
                const postData = {
                    question: formData
                };
                setFormData('');
                // POST 요청을 보낼 서버의 URL
                const url = 'http://172.16.3.91:8080/chat/question';
                const getUrl = 'http://172.16.3.91:8080/chat/read';

                const response = await axios.post(url, postData);
                const respjonse = await axios.get(getUrl);
                setPeople(respjonse.data)
                // 요청이 성공한 경우
                console.log('요청 성공:', response);
                // 여기에서 값을 저장하거나 추가적인 작업을 수행할 수 있습니다.

            } catch (error) {
                // 요청이 실패한 경우
                console.error('요청 실패:', error);
            }
        } else {
            alert("고민을 입력해주세요!!");
        }
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            saveData();
        }
    }

    return (
        <M.Content>
            {
                people.map((i) => (
                    <>
                        <M.AiContent>
                            <M.AiProfile src={Person} alt="" />
                            <M.AiText>{i.replyMessage}</M.AiText>
                        </M.AiContent>
                        <M.MyContent>
                            <M.MyProfile src={Person} alt="" />
                            <M.MyText>{i.questionMessage}</M.MyText>
                        </M.MyContent>
                    </>
                ))
            }
            <M.Input onChange={handleChange} onKeyPress={handleKeyPress} placeholder="당신의 고민을 적어주세요!!" type="text" name="" id="input" value={formData} />
            <M.SendImg src={Send} alt="" onClick={saveData} />
        </M.Content>
    )
}

export default Main;
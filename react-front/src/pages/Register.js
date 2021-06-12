import React, {useState} from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom"

const Wrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
`

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
  width:430px;
`;
const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Select = styled.select`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({disabled}) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

function Register() {
    const [account, setAccount] = useState({
        id: "",
        password: "",
        place: "",
    });
    const history = useHistory()
    const onChangeAccount = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    const onChangeSubmit = async () => {
        try {
            if (account.place !== "" && account.id.includes('@') && account.id.includes('.')) {
                const response = await fetch(
                    process.env.REACT_APP_FLASK_HOST + 'api/register',
                    {
                        'method': 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            'id': account.id,
                            'pw': account.password,
                            'place': account.place
                        })
                    })
                if (response.ok) {
                    window.alert('회원 가입을 완료했습니다.')
                    history.replace("/")
                }
            } else {
                window.alert('이메일 형식 또는 지역을 확인해주세요')
            }
        } catch (error) {
            window.alert(error)
        }
    }

    return (
        <Wrapper>
            <Container>
                <Input
                    id="id"
                    name="id"
                    placeholder="아이디를 입력해주세요. (test@gmail.com)"
                    onChange={onChangeAccount}
                />
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    onChange={onChangeAccount}
                />

                <Select id="place" name="place" onChange={onChangeAccount}>
                    <option id="place" value="">--지역을 선택해 주세요--</option>
                    <option id="place" value="홍대">홍대</option>
                    <option id="place" value="상수">상수</option>
                    <option id="place" value="강남">강남</option>
                    <option id="place" value="성수">성수</option>
                </Select>

                <Button onClick={onChangeSubmit}>회원가입</Button>
            </Container>
        </Wrapper>
    );
}

export default Register;
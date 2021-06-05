import React, {useState} from "react";
import { Redirect } from 'react-router-dom';

function Login({authenticated, login, location}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        try {
            login({email, password});
        } catch (e) {
            alert("failed to login");
            setEmail("");
            setPassword("");
        }
    };

    const { from } = location.state || { from : { pathname: "/"}};
    if (authenticated) return <Redirect to={from}/>;

    return (
        <>
            <h3>아이디</h3>
            <input
                value={email}
                onChange={({target: {value}}) => setEmail(value)}
                type="text"
                placeholder="이메일"
            />
            <input
                value={password}
                onChange={({target: {value}}) => setPassword(value)}
                type="password"
                placeholder="비밀번호"
            />
            <button onClick={handleClick}>로그인</button>
        </>
    )
}

export default Login;

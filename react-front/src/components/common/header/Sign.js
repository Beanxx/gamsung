import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Menu} from 'antd';

function Sign(props, {authenticated, logout, history}) {
    const handleClick = () => {
        logout();
        history.push('/');
    }

    return (
        !authenticated ?
            <Menu mode={props.mode}>
                <Menu.Item key="mail">
                    <Link to="/login">로그인</Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Link to="/register">회원가입</Link>
                </Menu.Item>
            </Menu>
            :
            <Menu mode={props.mode}>
                <Menu.Item key="mail">
                    <Link onClick={handleClick}>로그아웃</Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Link to="/myPage">마이페이지</Link>
                </Menu.Item>
            </Menu>
    )
}

export default withRouter(Sign);
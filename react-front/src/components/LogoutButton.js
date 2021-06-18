import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Menu} from "antd";

function LogoutButton({logout, history}, props) {
    const handleClick = () => {
        logout();
        history.push('/');
    }
    return (
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

export default withRouter(LogoutButton);

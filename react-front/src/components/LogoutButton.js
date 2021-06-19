import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from "./common/Button";

function LogoutButton({logout, history}) {
    const handleClick = () => {
        logout();
        history.push('/');
    }
    return (
        <div className="right">
            <Button onClick={handleClick}>로그아웃</Button>
        </div>
    );
}

export default withRouter(LogoutButton);

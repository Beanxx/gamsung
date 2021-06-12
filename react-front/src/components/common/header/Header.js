import React, {useState} from 'react';
import {Drawer, Button} from 'antd';
import {FaBeer} from 'react-icons/fa';
import LeftMenu from './LeftMenu';
import RightMenu from "./RightMenu";

const Header = () => {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false)
    }

    return (
        <nav className="menu" style={{position: 'fixed', zIndex: 5, width: '100%'}}>
            <div className="menu__logo">
                <a href="/">GAMSUNG</a>
            </div>
            <div className="menu__container">
                <div className="menu_left">
                    <LeftMenu mode="horizontal"/>
                </div>
                <div className="menu_right">
                    <RightMenu mode="horizontal"/>
                </div>
                <Button
                    className="menu__mobile-button"
                    type="primary"
                    onClick={showDrawer}
                >
                    <FaBeer type="align-right"/>
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    className="menu_drawer"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <LeftMenu mode="inline"/>
                    <RightMenu mode="inline"/>
                </Drawer>
            </div>
        </nav>
    );
};

export default Header;
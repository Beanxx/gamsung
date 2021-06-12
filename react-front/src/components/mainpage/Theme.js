import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './MainPage.css';


const StoreBlock = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  height: 400px;
  background: #212529;
`;


const Theme = () => {
    return (
        <>
            <StoreBlock>
                <div className="theme-box">
                    <p>dddd</p>
                </div>
            </StoreBlock>

        </>
    );
}

export default Theme;
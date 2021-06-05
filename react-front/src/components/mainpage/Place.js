import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import './MainPage.css';

const PlaceBlock = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  background: #f8f9fa;
`;


const Place = () => {
    return (
        <>
            <PlaceBlock>
                <h3>원하는 지역 둘러보기</h3>
                <div className="button-position">
                    <Button variant="outline-primary" size="lg">홍대</Button>
                    <Button variant="outline-primary" size="lg">연남</Button>
                    <Button variant="outline-primary" size="lg">을지</Button>
                    <Button variant="outline-primary" size="lg">망원</Button>
                </div>


            </PlaceBlock>

        </>
    );
}

export default Place;
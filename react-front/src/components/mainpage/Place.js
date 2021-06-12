import React from 'react';
import styled from 'styled-components';
import './Place.css';

const PlaceBlock = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  height: 170px;
  background: #f8f9fa;
  flex-direction: column;
  padding:10px;
  padding-left: 30px;
  padding-right: 30px;
`;


const Place = () => {
    return (
        <>
            <PlaceBlock>
                <p className="place-title">원하는 지역 둘러보기</p>
                <div className="place-boxall">
                    <div className="place-box">
                        <img className="place-pic"
                             src="https://cdn.pixabay.com/photo/2019/04/29/07/33/streets-4165342_960_720.jpg"/>
                        <p>홍대</p>
                    </div>
                    <div className="place-box">
                        <img className="place-pic"
                             src="https://cdn.pixabay.com/photo/2019/04/29/07/33/streets-4165342_960_720.jpg"/>
                        <p>상수</p>
                    </div>
                    <div className="place-box">
                        <img className="place-pic"
                             src="https://cdn.pixabay.com/photo/2019/04/29/07/33/streets-4165342_960_720.jpg"/>
                        <p>연남</p>
                    </div>
                    <div className="place-box">
                        <img className="place-pic"
                             src="https://cdn.pixabay.com/photo/2019/04/29/07/33/streets-4165342_960_720.jpg"/>
                        <p>망원</p>
                    </div>
                </div>
            </PlaceBlock>

        </>
    );
}

export default Place;
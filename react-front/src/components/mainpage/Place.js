import React from 'react';
import styled from 'styled-components';
import './Place.css';
import {Link} from "react-router-dom";

const PlaceBlock = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  height: 190px;
  background: #f8f9fa;
  flex-direction: column;
  padding:5px;
  padding-left: 30px;
  padding-right: 30px;
`;


const Place = () => {
    return (
        <>
            <PlaceBlock>
                <p className="place-title">원하는 지역 둘러보기</p>
                <div className="place-boxall">
                    <Link to="./storeList" className="default-link">
                        <div className="place-box">
                            <img className="place-pic"
                                 src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201106_135%2F1604643044365HUfrK_JPEG%2Fupload_02e9864863df7bc7f30f779feda84a68.jpeg"/>
                            <div className="place-location">
                                <p className="place-name">홍대</p>
                                <p className="place-subname">서울 마포구</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="./storeList" className="default-link">
                        <div className="place-box">
                            <img className="place-pic"
                                 src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210228_261%2F16144402497217QKxk_JPEG%2Fupload_610a7c259b07b83c03ce8cc948fdefe8.jpeg"/>
                            <div className="place-location">
                                <p className="place-name">상수</p>
                                <p className="place-subname">서울 마포구</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="./storeList" className="default-link">
                        <div className="place-box">
                            <img className="place-pic"
                                 src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MTJfMjI5%2FMDAxNjE4MjAwMjg3NzQ5.vHP93Xgg5-1SyEhYux_BYTY-88hSKaPmdp024SunSW8g.nj-dPlzOanBZCJT-u2ajkB8k_pC6TkR-1uc1T34b_xEg.JPEG.epiiplus1-0%2FIMG_9099.JPG"/>
                            <div className="place-location">
                                <p className="place-name">연남</p>
                                <p className="place-subname">서울 마포구</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="./storeList" className="default-link">
                        <div className="place-box">
                            <img className="place-pic"
                                 src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210523_95%2F1621763920687HqxlF_JPEG%2Fupload_973bd2f8381d3a2d0af84580a6f7cb6d.jpg"/>
                            <div className="place-location">
                                <p className="place-name">망원</p>
                                <p className="place-subname">서울 마포구</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </PlaceBlock>

        </>
    );
}

export default Place;
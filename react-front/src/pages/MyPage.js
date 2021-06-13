import React from "react";
import TabList from "../components/mypage/TabList";
import MyInfo from "../components/mypage/Infomation";
import styled from "styled-components";

const MypageDiv = styled.div`
  position: relative;
  width: 100%;
  height:800px;
  background: yellow;
  padding-top: 8%;
  margin: auto 0;  
`;


function MyPage() {

    return (
        <MypageDiv>
            <TabList/>
            <MyInfo/>
        </MypageDiv>
    );
}

export default MyPage;

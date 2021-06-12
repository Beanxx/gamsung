import React from "react";
import TabList from "../components/mypage/tabList";
import MyInfo from "../components/mypage/infomation";
import styled from "styled-components";

const MypageDiv = styled.div`
  position: relative;
  width: 100%;
  height:800px;
  background: yellow;
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

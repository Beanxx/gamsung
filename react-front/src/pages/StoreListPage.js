import React from "react";
import StoreList from "../components/storeListPage/StoreList"
import styled from "styled-components";
import Map from "../components/storeListPage/Map";

const StoreListDiv = styled.div`
  position: relative;
  width: 100%;
  height:800px;
  background: yellow;
`;


function StoreListPage() {
    return (
        <div>
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=75e9922383f1ead03a8206ebf0d60456"></script>
            <StoreListDiv>
                <StoreList/>
                <Map/>
            </StoreListDiv>
        </div>
    );
}

export default StoreListPage;
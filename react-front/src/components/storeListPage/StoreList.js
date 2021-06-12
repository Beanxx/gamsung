import React from 'react';
import styled from "styled-components";

const TestBlock = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 42%;
  height:600px;
  background: blue;
`;

function Store() {
//     styled.div`
//   position: relative;
//   float: left;
//   display: block;
//   width: 100%;
//   height:100px;
//   margin-top:1.5%;
//   margin-bottom:0.8%;
//   background: skyblue;
//   border-radius:3px;
// `;

    return(
        <div>

        </div>

    );
};


const storeList = () => {
    return (
        <TestBlock>
            <Store/>
            <Store/>
            <Store/>
        </TestBlock>
    );
}

export default storeList;
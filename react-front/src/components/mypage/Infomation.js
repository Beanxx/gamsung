import React from 'react';
import styled from "styled-components";
import Infomation_user from "./Infomation_user"
import Infomation_reservation from "./Infomation_reservation";



const TestBlock = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 55%;
  height:600px;
  background: red;
  border-top-right-radius:15px;
`;

const clickPage = "user"

const myInfo = () => {
    return (
        <TestBlock>
            <div>
                {
                    clickPage == "user" ? <Infomation_user/> : <Infomation_reservation/>
                }
            </div>

        </TestBlock>
    );
};

export default myInfo;
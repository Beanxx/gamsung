import React from 'react';
import styled from "styled-components";
import "./infomation_user.css";

const TestBlock = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 55%;
  height:300px;
  background: red;
  border-radius:8px;
`;

const divStyle ={
    paddingTop:'2%',

}

function Contents(props) {

    return(
        <div class="infoBlock">
            <div class="infoProperty">
                {props.property}
            </div>
            <input class="infoInput" placeholder={props.detail}/>
        </div>
    );
}


const myInfoUser = () => {
    return (
        <TestBlock style={divStyle}>
            <Contents property="이름" detail="냥냥이"/>
            <Contents property="관심 지역" detail="홍대"/>
        </TestBlock>
    );
};

export default myInfoUser;
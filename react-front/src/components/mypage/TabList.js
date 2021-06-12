import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const TestBlock = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 25%;
  height:600px;
  background: blue;
  border-top-left-radius:15px;
  
`;

const tabStyle = {
    position: 'relative',
    float: 'left',
    display: 'block',
    width: '100%',
    height: '12%',
    background: 'skyblue',
    marginTop: '3%',
    paddingTop:'5%',
    textAlign: 'right',
    borderRadius:'5px',
    fontSize: '2em',

    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
};

function Tab(props) {
    return (
        <Link to="/">
            <div style={tabStyle}>
                {props.inputText}
            </div>
        </Link>
    );
}

const tabList = () => {
    return (
        <TestBlock>
            <Tab inputText="회원 정보"/>
            <Tab inputText="예약 확인"/>
        </TestBlock>
    );
};

export default tabList;
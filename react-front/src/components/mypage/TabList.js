import React from 'react';
import styled from "styled-components";

const TestBlock = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 30%;
  height:600px;
  background: blue;
  border-top-left-radius:15px;
`;

const Tab = styled.div`
  position: relative;
  float: left;
  display: block;
  width: 100%;
  height: 12%;
  background: skyblue;
  margin-top:5%
`;

const tabList = () => {
    return (
        <TestBlock>
            <Tab/>
            <Tab/>
        </TestBlock>
    );
};

export default tabList;
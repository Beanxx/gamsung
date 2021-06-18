import React from 'react';
import styled from "styled-components";

const TestBlock = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 55%;
  height:600px;
  background: red;
`;


const kMap = <div id="map" style="width:500px;height:400px;"/>;

const Map = () => {
    return (
        <TestBlock>
            test
        </TestBlock>
    );

};

export default Map;
import React from 'react';
import styled from "styled-components";

const TestBlock = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 70%;
  height:600px;
  background: red;
  border-top-right-radius:15px;
`;


const myInfo = () => {
    return (
        <TestBlock>
            <div>
                <h5>hey</h5>
                <div className="button-position">

                </div>


            </div>

        </TestBlock>
    );
};

export default myInfo;
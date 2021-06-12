import React from 'react';
import styled from "styled-components";

const TestBlock = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 55%;
  height:600px;
  background: red;
  border-top-right-radius:15px;
`;


const myInfoReservation = () => {
    return (
        <TestBlock>
            <div>
                <h5>reservation</h5>
             </div>

        </TestBlock>
    );
};

export default myInfoReservation;
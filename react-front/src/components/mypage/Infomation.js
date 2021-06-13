import React, {Component} from 'react';
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


class myInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickPage: "user"
        };
    }

    render() {
        return (
            <TestBlock>
                    {
                        this.state.clickPage == "user" ? <Infomation_user/> : <Infomation_reservation/>
                    }
            </TestBlock>
        );
    }
};

export default myInfo;
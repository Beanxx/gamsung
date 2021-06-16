import React, {Component} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import MyInfo from "./Infomation";

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
    height: '9%',
    background: 'skyblue',
    marginTop: '3%',

    textAlign: 'right',
    borderRadius: '5px',
    fontSize: '2em',


    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
};


class tabList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        clicked: "",
    }

    //e.target.value만 넘겨주면 페이지 전환
    handleClick = (e) => {
        this.setState({
            clicked: e.target.value
        });
        e.preventDefault();
        this.props.onCreate(this.state);
    }


    render() {


        return (
            <TestBlock>
                <Link to="/mypage">
                    <div style={tabStyle} onClick={this.handleClick}>
                        회원 정보
                    </div>
                </Link>
                <Link to="/mypage">
                    <div style={tabStyle} onClick={this.handleClick}>
                        예약 확인
                    </div>
                </Link>
            </TestBlock>
        );
    }
};

export default tabList;
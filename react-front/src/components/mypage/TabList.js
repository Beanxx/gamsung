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

function handleClick(e) {
    alert('hi')
}


function Tab(props) {

    //TabList에서 클릭된 페이지를 Mypage에 반환
    //Mypage에서 MyInfo에 해당 값 반환
    //페이지 전환

    return (
        <Link to="/mypage">
            <div style={tabStyle} onClick={props.handleClick}>
                {props.inputText}
            </div>
        </Link>
    );
}


class tabList extends Component {

    state = {
        clicked: "",
    }

    handleClick = (e) => {
        this.setState({
            clicked: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
    }

    render() {


        return (
            <TestBlock>
                <Tab inputText="회원 정보" onClick={this.handleClick}/>
                <Tab inputText="예약 확인" onClick={this.handleClick}/>
            </TestBlock>
        );
    }
};

export default tabList;
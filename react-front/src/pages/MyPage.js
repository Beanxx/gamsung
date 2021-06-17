import React, {Component} from "react";
import TabList from "../components/mypage/TabList";
import styled from "styled-components";
import Infomation_user from "../components/mypage/Infomation_user";
import Infomation_reservation from "../components/mypage/Infomation_reservation";

const MypageDiv = styled.div`
  position: relative;
  width: 100%;
  height:800px;
  padding-top: 8%;
  margin-left: 5%;  
`;


class MyPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickPage: "user"
        };
        this.handleCreate = this.handleCreate.bind(this);
    };


    handleCreate = (data) => {
    alert(data);
    this.setState({
            clickPage: data
        });
    console.log('hi');
  }


    render() {
        return (
            <MypageDiv>
                <TabList onCreate={this.handleCreate}/>
                {this.state.clickPage == "reservation" ? <Infomation_reservation/> : <Infomation_user/>}
            </MypageDiv>
        );
    }
}

export default MyPage;

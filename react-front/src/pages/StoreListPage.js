import React, {Component} from "react";
import StoreList from "../components/storeListPage/StoreList"
import styled from "styled-components";
import Map from "../components/storeListPage/Map";

const StoreListDiv = styled.div`
  position: relative;
  width: 100%;
  height:800px;
  background: yellow;
  display:block;
`;


class StoreListPage extends Component{


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
    console.log('bye');
  }

    render() {


    return (
            <StoreListDiv>
                <StoreList onCreate={this.handleCreate}/>
                <Map/>
            </StoreListDiv>
    );
    }
}

export default StoreListPage;
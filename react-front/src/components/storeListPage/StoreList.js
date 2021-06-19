import React, {Component} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const TestBlock = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 40%;
  height:600px;
  background: blue;
`;


class storeList extends Component {

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
                <Link to="storeList">
                    <div onClick={this.handleClick}>
                        here
                    </div>
                </Link>
            </TestBlock>
        );
    }
}

export default storeList;
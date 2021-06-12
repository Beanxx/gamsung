import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LogoutButton from "./components/LogoutButton";
import AuthRoute from "./auth/AuthRoute";
import MyPage from "./pages/MyPage";
import {signIn} from "./auth/auth";
import styled from "styled-components";
import Responsive from "./components/common/Responsive";
import Button from "./components/common/Button";
import Register from "./pages/Register"
import StoreListPage from "./pages/StoreListPage";

const HeaderBlock = styled.div`
  display: block;
  width: 100%;
  height: 80px;
  background: #ced4da;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

function App() {
    const [user, setUser] = useState(null);
    const authenticated = user != null;
    const login = ({email, password}) => setUser(signIn({email, password}))
    const logout = () => setUser(null);
    const [articles, setArticles] = useState([])

    // useEffect(() => {
    //     //flask 서버 ip & port
    //     fetch(process.env.REACT_APP_FLASK_HOST, {
    //         'method': 'GET',
    //         headers: {
    //             'Content-Type': 'applications/json'
    //         }
    //     }).then(resp => resp.json()).then(resp => setArticles(resp)).catch(error => console.log(error))
    // }, [])

    return (
        <Router>
            <HeaderBlock>
                <Wrapper>
                        <Link to="/">
                            <div className="logo">GAMSUNG</div>
                        </Link>
                        {authenticated ? (
                            <LogoutButton logout={logout}/>
                        ) : (
                            <Link to="/login">
                                <div className="right">
                                    <Button>LOGIN</Button>
                                </div>
                            </Link>
                        )}
                        <Link to="/myPage">
                            <button>마이페이지</button>
                        </Link>

                </Wrapper>
                <Spacer/>
            </HeaderBlock>
            <hr/>
            <main>
                <Switch>
                    <Route
                        exact path="/"
                        render={props => (
                            <Home articles={articles} {...props} />
                        )}
                    />
                    <Route
                        path="/login"
                        render={props => (
                            <Login authenticated={authenticated} login={login} {...props} />
                        )}
                    />

                    <Route
                        path="/register"
                        render={props => (
                            <Register/>
                        )}
                    />

                    {/*<AuthRoute*/}
                    {/*    authenticated={authenticated}*/}
                    {/*    path="/myPage"*/}
                    {/*    render={props => <MyPage user={user} {...props} />}*/}
                    {/*/>*/}

                    <Route
                        path="/storeList"
                        component={StoreListPage}/>

                    <Route
                        path="/myPage"
                        component={MyPage}/>

                </Switch>
            </main>
        </Router>
    )
        ;
}

export default App;

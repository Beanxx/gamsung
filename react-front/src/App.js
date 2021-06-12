import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LogoutButton from "./components/LogoutButton";
import AuthRoute from "./auth/AuthRoute";
import MyPage from "./pages/MyPage";
import {signIn} from "./auth/auth";
import Register from "./pages/Register"
import StoreListPage from "./pages/StoreListPage";
import Header from "./components/common/header/Header";

function App() {
    const [user, setUser] = useState(null);
    const authenticated = user != null;
    const login = ({email, password}) => setUser(signIn({email, password}))
    const logout = () => setUser(null);
    const [articles, setArticles] = useState([])

    return (
        <Router>
            <Header/>
            {/*<HeaderBlock>*/}
            {/*    <Wrapper>*/}
            {/*        <Link to="/">*/}
            {/*            <div className="logo">GAMSUNG</div>*/}
            {/*        </Link>*/}
            {/*        {authenticated ? (*/}
            {/*            <LogoutButton logout={logout}/>*/}
            {/*        ) : (*/}
            {/*            <Link to="/login">*/}
            {/*                <div className="right">*/}
            {/*                    <Button>LOGIN</Button>*/}
            {/*                </div>*/}
            {/*            </Link>*/}
            {/*        )}*/}
            {/*        <Link to="/myPage">*/}
            {/*            <button>마이페이지</button>*/}
            {/*        </Link>*/}

            {/*    </Wrapper>*/}
            {/*    <Spacer/>*/}
            {/*</HeaderBlock>*/}
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

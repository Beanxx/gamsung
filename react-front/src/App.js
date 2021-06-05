import './App.css';
import {useState, useEffect} from "react";
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LogoutButton from "./components/LogoutButton";
import AuthRoute from "./auth/AuthRoute";
import MyPage from "./pages/MyPage";
import {signIn} from "./auth/auth";

function App() {
    const [user, setUser] = useState(null);
    const authenticated = user != null;
    const login = ({email, password}) => setUser(signIn({email, password}))
    const logout = () => setUser(null);
    const [articles, setArticles] = useState([])

    useEffect(() => {
        //flask 서버 ip & port
        fetch(process.env.REACT_APP_FLASK_HOST, {
            'method': 'GET',
            headers: {
                'Content-Type': 'applications/json'
            }
        }).then(resp => resp.json()).then(resp => setArticles(resp)).catch(error => console.log(error))
    }, [])

    return (
        <Router>
            <header>
                <Link to="/">
                    <image>로고</image>
                </Link>
                {authenticated ? (
                    <LogoutButton logout={logout}/>
                ) : (
                    <Link to="/login">
                        <button>로그인</button>
                    </Link>
                )}
                <Link to="/myPage">
                    <button>마이페이지</button>
                </Link>
            </header>
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
                    <AuthRoute
                        authenticated={authenticated}
                        path="/myPage"
                        render={props => <MyPage user={user} {...props} />}
                    />
                </Switch>
            </main>
        </Router>
    );
}

export default App;

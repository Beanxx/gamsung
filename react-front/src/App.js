import './App.css';
import {useState, useEffect} from "react";
import { Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";

function App() {

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
        <div className="App">
            <Route component={MainPage} path={"/main"}/>

            {
                articles.map(article => {
                    return(
                        <div key={article.id}>
                            <h2>id : {article.id}</h2>
                            <h2>pw: {article.pw}</h2>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;

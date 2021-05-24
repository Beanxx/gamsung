import './App.css';
import {useState, useEffect} from "react";

function App() {

    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('http://192.168.219.101:7000/', {
            'method': 'GET',
            headers: {
                'Content-Type': 'applications/json'
            }
        }).then(resp => resp.json()).then(resp => setArticles(resp)).catch(error => console.log(error))
    }, [])
    return (
        <div className="App">
            <h1>Flask and ReactJS</h1>
            {
                articles.map(article => {
                    return(
                        <div key={article.group}>
                            <h2>{article.group}</h2>
                            <h2>{article.member}</h2>
                            <h2>{article.project}</h2>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;

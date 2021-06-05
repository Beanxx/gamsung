import React from "react";

function Home({articles}) {
    return (
        <div className="App">
            <h1>Flask and ReactJS</h1>
            {
                articles.map(article => {
                    return (
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

export default Home;

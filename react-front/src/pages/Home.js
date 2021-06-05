import React from "react";
import Search from "../components/mainpage/Search";
import Place from "../components/mainpage/Place";
import RandomStore from "../components/mainpage/RandomStore";

function Home() {
    return (
        <div className="App">
            <Search/>
            <Place/>
            <RandomStore/>
        </div>
    );
}

export default Home;

import React from "react";
import Search from "../components/mainpage/Search";
import Place from "../components/mainpage/Place";
import Theme from "../components/mainpage/Theme";

function Home() {
    return (
        <div className="App">
            <Search/>
            <Place/>
            <Theme/>
        </div>
    );
}

export default Home;

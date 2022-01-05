import React from "react";
import style from "./style.module.scss";
import Header from "../Header";
import Content from "components/Content";


const App = () => {
    
    return(
        <div className={style.App}>
            <Header/>
            <Content/>
        </div>
    )
}

export default App;
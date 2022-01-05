import React from "react";
import style from "./style.module.scss";
import HomePage from "../../pages/HomePage";
import { Route, Routes } from "react-router-dom";

const Content = () => {
    return (

        <div className={style.content}>
            <Routes>
                <Route path="/Home" element={<HomePage/>} />

            </Routes>
        </div>



    )
}

export default Content
import React from "react";
import style from "./style.module.scss";
import HomePage from "../../pages/HomePage";
import CryptocurrenciesPage from "../../pages/CryptoCurrenciesPage";
import { Route, Routes } from "react-router-dom";
import DetailCoinPage from "../../pages/DetailCoinPage";

const Content = () => {
    return (
        <div className={style.content}>
            <Routes>
                <Route path="/Home" element={<HomePage />} />
                <Route path="/Cryptocurrencies" element={<CryptocurrenciesPage />}/>
                <Route path="/Cryptocurrencies/:uuid" element={<DetailCoinPage/>}/>
            </Routes>
        </div>
    )
}

export default Content
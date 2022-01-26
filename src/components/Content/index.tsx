import React, { memo } from "react";
import { Route, Routes, } from "react-router-dom";
import style from "./style.module.scss";
import HomePage from "pages/HomePage";
// import CryptoCurrenciesPage from "pages/CryptoCurrenciesPage";
import DetailCoinPage from "pages/DetailCoinPage";
import NewsPage from "pages/NewsPage";
import ExchangesPage from "pages/ExchangesPage";

const Content = () => {
    return (
        <div className={style.content}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Home" element={<HomePage />} />
                {/* <Route path="/Cryptocurrencies" element={<CryptoCurrenciesPage />} /> */}
                <Route path="/Cryptocurrencies/:uuid" element={<DetailCoinPage />} />
                <Route path="/Exchanges/:uuid" element={<ExchangesPage />} />
                <Route path="/News" element={<NewsPage />} />
            </Routes>
        </div>
    )
}

export default memo(Content);
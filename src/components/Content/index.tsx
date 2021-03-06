import React, { memo } from "react";
import { Route, Routes, } from "react-router-dom";
import style from "./style.module.scss";
import HomePage from "pages/HomePage";
import DetailCoinPage from "pages/DetailCoinPage";
import CryptosPage from "pages/CryptosPage";
import NewsPage from "pages/NewsPage";
import ExchangesPage from "pages/ExchangesPage";

const Content = () => {
    return (
        <div className={style.content}>
            <div className={style.container}>
                <div className={style.block_content_items}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/Home" element={<HomePage />} />
                        <Route path="/Cryptocurrencies" element={<CryptosPage />} />
                        <Route path="/Cryptocurrencies/:uuid" element={<DetailCoinPage />} />
                        <Route path="/Exchanges/:uuid" element={<ExchangesPage />} />
                        <Route path="/News" element={<NewsPage />} />
                    </Routes>
                </div>
            </div>
        </div>

    )
}

export default memo(Content);
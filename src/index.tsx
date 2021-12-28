import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const element = document.querySelector('#root')

ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
element);
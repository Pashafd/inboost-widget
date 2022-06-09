import App from "@/App";
import React from "react";
import { createRoot } from "react-dom/client";
import modules from "@/styles/global.module.scss";
import { Provider } from "react-redux";
import store from "./store";

const root = document.createElement("div");

Object.assign(root, {
    className: modules.app,
});

createRoot(document.body.appendChild(root)).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);

import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRouteElement from "./useRouteElement";

function App() {
    const routeElement = useRouteElement();
    return ( <
        div >

        { routeElement } < ToastContainer / >
        <
        /div>
    );
}

export default App;
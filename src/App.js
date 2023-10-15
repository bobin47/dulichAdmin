import "./App.css";
import React from "react";
import { message } from "antd";
import { decodeToken } from 'react-jwt';
import { clearLC, getAccessTokenFormLC } from "./utils/utils";
import useRouteElement from "./useRouteElement";

function App() {
  const routeElement = useRouteElement();
  if(getAccessTokenFormLC()){
    const token = getAccessTokenFormLC();
    const decodedToken = decodeToken(token);
    console.log(Date.now())
    console.log()

    if (Date.now() >= decodedToken.exp * 1000) {
      message.error("token hen han vui long dang nhap lai")
      setTimeout(() => {
        clearLC()
        
        document.location.assign("/login")
      }, 2000);
    }
  }

  return (
    <div>
      {routeElement}
    </div>
  );
}

export default App;

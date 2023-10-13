import "./App.css";
import React from "react";

import "react-toastify/dist/ReactToastify.css";
import useRouteElement from "./useRouteElement";

function App() {
  const routeElement = useRouteElement();
  return (
    <div>
      {routeElement}
    </div>
  );
}

export default App;

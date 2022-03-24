import { useRoutes } from "react-router-dom";
import React from "react";
import { routes } from "./routes";

function App() {
  const elements = useRoutes(routes);

  return <div className="App">{elements}</div>;
}

export default App;

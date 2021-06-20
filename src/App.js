import React from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = React.useState("");
  console.log(token);

  React.useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) setToken(_token);
  }, []);

  return <div className="App">{!!token ? <h1>Dashboard</h1> : <Login />}</div>;
}

export default App;

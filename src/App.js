import React from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Dashboard from "./Dashboard";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = React.useState("");
  React.useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("user", user);
      });
    }
  }, []);

  return <div className="App">{!!token ? <Dashboard /> : <Login />}</div>;
}

export default App;

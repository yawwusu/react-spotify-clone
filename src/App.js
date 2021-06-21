import React from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import Dashboard from "./Dashboard";
import { useStateContext } from "./StateProvider";
import { spotify } from "./spotify";

function App() {
  const [{ user, token }, dispatch] = useStateContext();

  React.useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists.items,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcO7mGuhdePUr").then((response) => {
        console.log("response", response);
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [dispatch]);

  return <div className="App">{!!token ? <Dashboard /> : <Login />}</div>;
}

export default App;

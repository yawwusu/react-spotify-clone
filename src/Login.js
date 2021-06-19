import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="Login">
      <img
        className="Login-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Welcome to The Spotify Clone"
      />
      <a href={loginUrl} className="Login-button">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;

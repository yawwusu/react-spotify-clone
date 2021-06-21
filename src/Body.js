import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateContext } from "./StateProvider";

function Body() {
  const [{ discover_weekly }, dispatch] = useStateContext();

  return (
    <div className="Body">
      <Header />
      <div className="Body-info">
        <img src={discover_weekly?.images?.[0]?.url} alt="Banner" />
        <div className="Body-infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Body;

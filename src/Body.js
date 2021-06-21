import React from "react";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import { useStateContext } from "./StateProvider";
import Header from "./Header";
import "./Body.css";
import SongRow from "./SongRow";

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

      <div className="Body-songs">
        <div className="Body-icons">
          <PlayCircleFilled fontSize="large" className="Body-shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {discover_weekly?.tracks?.items.map((item) => (
          <SongRow key={item.track.id} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;

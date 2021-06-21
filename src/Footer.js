import React from "react";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";
import {
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from "@material-ui/icons";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-left">
        <img
          className="Footer-albumLogo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Usher_-_Confessions_album_cover.jpg/220px-Usher_-_Confessions_album_cover.jpg"
          alt="album cover"
        />
        <div className="Footer-songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className="Footer-center">
        <Shuffle className="Footer-green" />
        <SkipPrevious className="Footer-icon" />
        <PlayCircleOutline fontSize="large" className="Footer-icon" />
        <SkipNext className="Footer-icon" />
        <Repeat className="Footer-green" />
      </div>

      <div className="Footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;

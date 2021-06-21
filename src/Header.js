import React from "react";
import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useStateContext } from "./StateProvider";
import "./Header.css";

function Header() {
  const [{ user }, dispatch] = useStateContext();
  return (
    <div className="Header">
      <div className="Header-left">
        <Search />
        <input type="text" placeholder="Search for Artists, Songs, or Other" />
      </div>
      <div className="Header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;

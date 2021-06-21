import React from "react";
import { Home, LibraryMusic, SearchOutlined } from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import { useStateContext } from "./StateProvider";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateContext();

  return (
    <div className="Sidebar">
      <img
        className="Sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Sidebar logo"
      />
      <SidebarOption title="Home" Icon={Home} />
      <SidebarOption title="Search" Icon={SearchOutlined} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />
      <br />
      <strong className="Sidebar-title">PLAYLISTS</strong>
      <hr />
      {playlists.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist?.name} />
      ))}
    </div>
  );
}

export default Sidebar;

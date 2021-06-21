import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "./Dashboard.css";

function Dashboard({ spotify }) {
  return (
    <div className="Dashboard">
      <div className="Dashboard-body">
        <Sidebar />
        <Body />
      </div>
      <div className="Dashboard-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;

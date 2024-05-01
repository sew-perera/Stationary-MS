import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home") {
      setActiveTab("Home");
    } else if (location.pathname === "/new") {
      setActiveTab("New");
    } else if (location.pathname === "/records") {
      setActiveTab("Records");
    } else if (location.pathname === "/profile") {
      setActiveTab("Profile");
    }
  }, [location]);

  return (
    <div
      style={{
        " font-size": "22px",
        "font-weight": 500,
        padding: 0,
        margin: 0,
        "box-sizing": "border-box",
        color: "white",
      }}
    >
      <div className="n-outer-wrapper">
        <div className="n-inner-wrapper">
          <div className="n-left">Logo</div>
          <div className="n-right">
            <Link
              to="/home"
              className={`${activeTab === "Home" ? "active" : "inactive"}`}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </Link>

            <Link
              to="/new"
              className={`${activeTab === "New" ? "active" : "inactive"}`}
              onClick={() => setActiveTab("New")}
            >
              New
            </Link>

            <Link
              to="/records"
              className={`${activeTab === "Records" ? "active" : "inactive"}`}
              onClick={() => setActiveTab("Records")}
            >
              Records
            </Link>

            <Link
              to="/profile"
              className={`${activeTab === "Profile" ? "active" : "inactive"}`}
              onClick={() => setActiveTab("Profile")}
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

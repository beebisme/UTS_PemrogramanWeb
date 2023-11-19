import React from "react";
import Navbar from "../components/navbar";

function MyWork() {
  let currentPath = window.location.pathname;
  let path = "";

  if (currentPath === "/about") {
    path = "about";
  } else if (currentPath === "/my-work") {
    path = "work";
  } else if (currentPath === "/") {
    path = "home";
  }

  return (
    <div>
      <Navbar currentPage={path} />
      <div className="content d-flex flex-row"></div>
    </div>
  );
}

export default MyWork;

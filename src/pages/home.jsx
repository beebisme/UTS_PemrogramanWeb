import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";

function Home() {
  let currentPath = window.location.pathname;
  let path = "";

  if (currentPath === "/about") {
    path = "about";
  } else if (currentPath === "/") {
    path = "home";
  }

  return (
    <div>
      <Navbar currentPage={path} />
      <Hero />
    </div>
  );
}

export default Home;

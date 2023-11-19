import React from "react";
import Navbar from "../components/navbar";
import "../style/styles.css";
import myPhoto from "../assets/myphoto.JPG";

function About() {
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
      <div className="content d-flex flex-row justify-content-center mt-4">
        <div className="myPhoto">
          <img alt="fotoku" src={myPhoto} />
        </div>
        <div className="d-flex flex-column">
          <p className="desc ms-4">
            Haloo! nama saya Muh Khoirurrohman H, mahasiswa Teknik Informatika
            di UMM, dengan fokus sebagai Frontend Developer dan UIUX Designer.
            saya berasal dari Nganjuk dan lahir pada tahun 2002. saya memiliki
            hobi bermain game dan tentu saja tidur hehe.
          </p>
          <h4 className="mt-2 ms-4 fw-bold">My Skill</h4>
          <div className="row ms-4 mt-1">
            <p className="skill-items py-1 px-4 bg-dark text-white rounded">
              Frontend Developer
            </p>
            <p className="skill-items ms-3 py-1 px-4 bg-dark text-white rounded">
              UIUX Designer
            </p>
          </div>
          <h4 className="mt-2 ms-4 fw-bold">My Work</h4>
          <a
            href="https://umkmprigi.org/"
            className="work-items py-1 ms-4 px-4 text-white rounded"
            target="blank"
          >
            UMKM Desa Prigi
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

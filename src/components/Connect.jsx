import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Magnet from "./Magnet";

const Connect = () => {
  return (
    <footer>
      <div className="connectParent">
        <div className="topTextFooter">
          <div style={{ width: "70%" }}>
            <div className="profilePic"></div>
            <p className="workText">&nbsp;Let's work together</p>
          </div>
          <div
            style={{
              transform: "rotate(135deg)",
              display: "inline-block",
              color: "white",
            }}
          >
            <IoArrowForward />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgb(216, 208, 208)",
            opacity: "0.1",
            marginTop: "80px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            marginTop: "-170px",
            marginLeft: "-80px",
          }}
        >
          <Magnet>
            <div className="touchBtn">Get in Touch</div>
          </Magnet>
        </div>
        <div className="info">
          <p className="infoPhone">arun0315as@gmail.com</p>
          <p className="infoPhone">+91-4589232165</p>
        </div>
      </div>
      <div className="socials">
        <div className="socialsLeft">
          <div className="version">
            <p className="soci">VERSION</p>
            <p className="sociText">2023 &copy; Edition</p>
          </div>
          {/* <div className="localTime">
            <p className="soci">LOCAL TIME</p>
            <p className="sociText">2023 &copy; Edition</p>
          </div> */}
        </div>
        <div className="socialsRight">
          <div className="version">
            <p className="soci">SOCIALS</p>
            <div style={{ display: "flex", gap: 30 }}>
              <p className="sociText">Github</p>
              <p className="sociText">LinkedIn</p>
              <p className="sociText">Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Connect;

import React, { useContext } from "react";
// import { flexCenter } from "../App";
import { UserContextTheme } from "../App";
import PAVOC_LOGO from "..//img/PAVOC_LOGO.png";
import PAVOC_TEXT from "..//img/PAVOC_TEXT.png";
import { BrowserRouter, Link } from "react-router-dom";

const Navigation = () => {
  const theme = useContext(UserContextTheme);
  return (
    <div style={Container}>
      <img
        src={PAVOC_LOGO}
        alt="LOGO"
        style={{ maxWidth: "100%", margin: "20px" }}
      ></img>
      <img
        src={PAVOC_TEXT}
        alt="TEXT"
        style={{ maxWidth: "100%", objectFit: "none" }}
      ></img>
      <BrowserRouter>
        <li style={RemoveLiDefaults}>
          <ul style={{ ...Underline, ...UlFontSize, paddingInline: "0rem",textDecoration:"underLine" }}>
            <Link to="/pavocForEmployer">Pavoc for Employer</Link>
          </ul>
          <ul
            style={{
              ...UlFontSize,
              ...FontWeight,
              backgroundColor: theme.secondaryVariant1,
              borderRadius: "8px",
            }}
          >
            <Link to="/Login">Login</Link>
          </ul>
          <ul
            style={{
              ...UlFontSize,
              ...FontWeight,
              backgroundColor: theme.primaryColor,
              borderRadius: "8px",
            }}
          >
            <Link to="/Sign up" style={{ color: "white" }}>
              Sign up
            </Link>
          </ul>
        </li>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;

const Container = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  boxShadow: "0px 2px 12px 4px rgba(0, 0, 0, 0.12)",
  width: "100%",
};

const Underline = {};

const RemoveLiDefaults = {
  listStyle: "none",
  display: "flex",
  marginLeft: "auto",
  marginRight: "1.5rem",
  alignItems: "center",
};

const UlFontSize = {
  fontSize: "1rem",
  paddingInline: "2.5rem",
  paddingBlock: "1rem",
  marginInline:"1rem"
};

const FontWeight = {
  fontWeight: "700",
};

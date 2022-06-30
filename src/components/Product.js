import React, { useContext } from "react";
import { UserContextTheme } from "../App.js";
import JobsBanner from "..//img/JobsBanner.png"

const Product = () => {
  const theme = useContext(UserContextTheme);

 //css start
  const flexCenter = {
    display:"flex",
    justifyContent:"center"
  }

  const Container = {
    backgroundColor: theme.primaryVariant1,
    paddingBlock:"1.5rem",
    paddingInline:"min(10vh,10rem,10vw)"
  };

  const Left = {
    inlineSize: "clamp(300px,657px,657px)",
    flexDirection: "column",
    marginRight:"5vw",
  };
  const Right = {};

  const Header = {
    color:theme.secondaryColor,
    marginBottom:"0.3em",
    fontSize:"clamp(30px,6vw,3.5rem)",
  }
  const Para = {
    fontSize:"clamp(16px, 2vw, 1.25rem)",
  }
// css end
  return (
    <section style={{...Container,...flexCenter}}>
      <div style={{...Left,...flexCenter}}>
        <h1 style={Header}>Explorer</h1>
        <p style={Para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
          magna dictum, fringilla enim sed, ultrices lorem. Fusce at massa
          egestas, lacinia enim ut, dictum nisl. Sed et magna nec turpis
          consectetur auctor quis a urna. Integer vehicula nisl nec neque
          fringilla ullamcorper. Sed id consequat urna.
        </p>
      </div>
      <div style={flexCenter}>
        <img src={JobsBanner} style={{maxWidth:"100%",objectFit:"scale-down"}}></img>
      </div>
    </section>
  );
};

export default Product;


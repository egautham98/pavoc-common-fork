import React, { createContext } from "react";
import Product from "./components/Product";
import Navigation from "./components/Navigation";

const theme = {
  primaryColor: "#1ABC9C",
  primaryVariant1:"#EBFFFB",
  secondaryColor: "#F39C12",
  secondaryVariant1:"#FFF0D9"
};
export const UserContextTheme = createContext(theme);

function App() {
  return (
    <UserContextTheme.Provider value={theme}>
      <div style={Container}>
      <Navigation></Navigation>
        <Product direction="normal" theme={theme} switchTheme={true}></Product>
        <Product direction="reverse" theme={theme} switchTheme={false}></Product>
        <Product direction="normal" theme={theme} switchTheme={true}></Product>
      </div>
    </UserContextTheme.Provider>
  );
}

export default App;

const Container = {
  maxWidth: "1920px",
  margin: " 0px auto",
};

export const flexCenter = {
  display:"flex",
  justifyContent:"center"
}
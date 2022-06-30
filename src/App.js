import React, { createContext } from "react";
import Product from "./components/Product";

const theme = {
  primaryColor: "#1ABC9C",
  primaryVariant1:"#EBFFFB",
  secondaryColor: "#F39C12",

};
export const UserContextTheme = createContext(theme);

function App() {
  return (
    <UserContextTheme.Provider value={theme}>
      <div style={Container}>
        <Product></Product>
      </div>
    </UserContextTheme.Provider>
  );
}

export default App;

const Container = {
  maxWidth: "1920px",
  margin: " 0px auto",
};

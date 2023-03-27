import React, { useContext } from "react";
// we have provided the context a value, which is the object that has the data to be shared among comp.
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  // use context is used to consume the shared data especially in the funcition comp
  const context = useContext(ThemeContext);
  // we are destructuring the object,picking up all the values
  const { isLightTheme, dark, light } = context;
  console.log(isLightTheme);
  const theme = isLightTheme ? light : dark;
  return (
    <div>
      <nav style={{ background: theme.ui, color: theme.t }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

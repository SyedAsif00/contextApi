import React, { Component, createContext } from "react";

// the createContext is a builtin function in react. for sharing data among comps, the function
// returns a context object, has a consumer and provider property. the provider will provide the
// data to any comps
export const ThemeContext = createContext();
// themeContextProvider is the comp where context is specified.
// the provider context will be used here. the components that are to use the data will be specified
class ThemeContextProvider extends Component {
  // this is the data that has to be shared among the components,
  // the provider has to provide the context
  state = {
    isLightTheme: true,
    light: { textColor: "#555", ui: "#ddd", bg: "#eee" },
    dark: { textColor: " #ddd", ui: "#333", bg: "#555" },
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
        {/*  this.props refers to the childrens that are being wrapper by the themecontextprovider
        comp, in this case we have bookList and navbar
        */}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContextProvider;

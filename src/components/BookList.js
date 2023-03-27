import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const context = useContext(ThemeContext);

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div
            style={{ background: theme.bg, color: theme.textColor }}
            className="book-list"
          >
            <ul>
              <li style={{ background: theme.ui }}>
                The Fourty Rules Of Loves
              </li>
              <li style={{ background: theme.ui }}>The Bastard Of Instanbul</li>
              <li style={{ background: theme.ui }}>Think And Grow Rich</li>
            </ul>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default BookList;

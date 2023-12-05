import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import header from "./header";

function App() {
  // const [onDarkModeClick,setOnDarkModeClick] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
  setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        < header isdarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />  
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

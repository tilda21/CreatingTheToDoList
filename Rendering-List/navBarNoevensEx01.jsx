import React from "react";
import  { createRoot }  from 'react-dom/client';

// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
function NavBar({ menuitems }) {
  const updatedList = menuitems.map((listItems, index) => {
    return <li key={index.toString()}>{listItems}</li>;
  });
  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];

createRoot(document.getElementById("root")).render(<NavBar menuitems={menuItems} />);
import React from "react";
import  { createRoot }  from 'react-dom/client';

// use of "props" to set data
function NavBar({ menuitems }) {
  // each item should have an unique key
  const updatedList = menuitems.map((item, index) => {
    return <li>{item}</li>;
  });
  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];

createRoot(document.getElementById("root")).render(<NavBar menuitems={menuItems} />);
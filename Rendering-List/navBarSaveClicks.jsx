import React from "react";
import  { createRoot }  from 'react-dom/client';
import Button from 'react-bootstrap/Button';

// use of "props" to set data
function NavBar(props) {
  const [clicks, setClicks] = React.useState([]);
  console.log(`clicks: ${clicks}`);
  alert(`Rendering NavBar`);
  const list = props.menuitems;

  // each item should have an unique key
  const handlßeClick = e => {
    console.log(`clicked on: ${e.target.innerHTML}`);
    setClicks([...clicks, e.target.innerHTML]);
  };
  const updatedList = list.map((listItems, index) => {
    return (
      <Button onClick={handleClick} key={index}>
        {listItems}
      </Button>
    );
  });
  // note that React needs to have a single Parent
  return <ul>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];

createRoot(document.getElementById("root")).render(<NavBar menuitems={menuItems} />);
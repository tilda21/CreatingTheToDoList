import React from "react";
import  { createRoot }  from 'react-dom/client';

const numbers = [1, 2, 3, 4, 5];

const updatedNums = numbers.map((number, index) => {
  return <li key={index.toString()}>{number}</li>;
});

createRoot(document.getElementById("root")).render(<ul>{updatedNums}</ul>);
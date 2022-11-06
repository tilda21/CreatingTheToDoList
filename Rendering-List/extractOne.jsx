import React from "react";
import  { createRoot }  from 'react-dom/client';
import HookCounterOne from './hookCounterOne';

const products = [
  { name: "Apples_:", instock: 10 },
  { name: "Oranges:", instock: 3 },
  { name: "Beans__:", instock: 5 },
  { name: "Cabbage:", instock: 4 },
];
const cartItems = [];

function App() {
  return (
    <div className="App">
      <HookCounterOne />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
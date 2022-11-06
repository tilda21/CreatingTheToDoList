import React from "react";
import  { createRoot }  from 'react-dom/client';
import HookCounterOne from './hookCounterOne';

function App() {
  return (
    <div className="App">
      <HookCounterOne />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
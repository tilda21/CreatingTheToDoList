import React from "react";
import  { createRoot }  from 'react-dom/client';
import Todo from "./todo";
import TodoForm from "./form";
import './styles.css';


createRoot(document.getElementById("root")).render(<App/>);
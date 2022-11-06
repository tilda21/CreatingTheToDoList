import React from "react";
import  { createRoot }  from 'react-dom/client';
import './styles.css';

function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }
  ])

  return(
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i}>{todo.text}</div>
      ))}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App/>);
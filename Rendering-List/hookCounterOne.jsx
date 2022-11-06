import React from "react";

export default function HookCounterOne() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => (document.title = `You clicked ${count} times`));

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times </button>
    </div>
  );
};
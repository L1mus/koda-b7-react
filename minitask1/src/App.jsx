import { useState } from "react";
import Button from "./components/Button";
import "./globals.css";

function App() {
  let [count, setCount] = useState(0);
  const incCounting = () => {
    setCount((count) => count + 1);
  };
  const decCounting = () => {
    setCount((count) => count - 1);
  };

  if (count < 0) {
    setCount(0);
  }

  return (
    <>
      <h1 className="text-2xl">Counter Time</h1>
      <Button
        onclick={incCounting}
        children="Increment"
        className="bg-amber-300 border-2 border-solid border-black p-3"
      />
      <p>Counter saat ini adalah {count}</p>
      <Button
        onclick={decCounting}
        children="Decrement"
        className="bg-amber-300 border-2 border-solid border-black p-3"
      />
    </>
  );
}

export default App;

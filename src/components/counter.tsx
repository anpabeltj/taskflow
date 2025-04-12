import { useState } from "react";
import { Button } from "./ui/button";

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((previousState) => previousState + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Count: {count}</p>

      <Button size="sm" onClick={increment}>
        Increment
      </Button>

      <Button
        size="sm"
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        Increment 3x
      </Button>

      <Button size="sm" onClick={decrement}>
        Decrement
      </Button>
    </div>
  );
}

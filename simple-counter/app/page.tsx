"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Simple Counter App</h1>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
    </main>
  );
}
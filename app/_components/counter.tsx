"use client";

import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState<number>(23);

  return (
    <button
      onClick={() => {
        setCount((c) => c + 1);
      }}
    >
      {count} Counter
    </button>
  );
}

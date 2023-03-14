import React from 'react';
import { useState } from 'react';

export default function FeeCalculator() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>🚗Car Zip🏠의 주차비 계산페이지</h1>
      <div className="button">
        <button onClick={() => setCount((count) => count + 1)}>신나는 만큼 클릭 ❤️ {count}</button>
      </div>
    </div>
  );
}

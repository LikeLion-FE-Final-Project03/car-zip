import React from 'react';
import { useState } from 'react';

export default function Mypage() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>๐Car Zip๐ ์ ๋ง์ดํ์ด์ง</h1>
      <div className="button">
        <button onClick={() => setCount((count) => count + 1)}>์ ๋๋ ๋งํผ ํด๋ฆญ โค๏ธ {count}</button>
      </div>
    </div>
  );
}

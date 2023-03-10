import React from 'react';
import { useState } from 'react';
import { IcTest, IcTest1 } from '../../public/assets/icons';
import testImage from '../../public/assets/images/image-test.png';

export default function Main() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>๐Car Zip๐ ์ ๋ฉ์ธ ํ์ด์ง</h1>
      <img src={testImage} width="150" />
      <div className="button">
        <button onClick={() => setCount((count) => count + 1)}>
          ์ ๋๋ ๋งํผ ํด๋ฆญ {count}
          <IcTest />
          <IcTest1 />
        </button>
      </div>
    </div>
  );
}

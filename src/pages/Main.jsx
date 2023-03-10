import React from 'react';
import { useState } from 'react';
import { IcTest, IcTest1 } from '../../public/assets/icons';
import testImage from '../../public/assets/images/image-test.png';

export default function Main() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>🚗Car Zip🏠의 메인 페이지</h1>
      <img src={testImage} width="150" />
      <div className="button">
        <button onClick={() => setCount((count) => count + 1)}>
          신나는 만큼 클릭 {count}
          <IcTest />
          <IcTest1 />
        </button>
      </div>
    </div>
  );
}

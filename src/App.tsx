import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>🦁멋쟁이사자처럼 FE 4기 React 3조🦁</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          신나는 만큼 클릭 ❤️ {count}
        </button>
      </div>
    </div>
  )
}

export default App

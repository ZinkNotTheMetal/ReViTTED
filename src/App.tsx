import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Configuration } from './runtime'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button 
            type="button"
            onClick={() => setCount((count) => count + 1)}
            className="btn"
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>

        <p>Build Variables</p>
        <p className="text-sm">Build Version: {import.meta.env.VITE_BUILD_VERSION}</p>

        <p>Runtime Variable</p>
        <p className="text-sm">API URL: {Configuration.API_URL}</p>
      </header>
    </div>
  )
}

export default App

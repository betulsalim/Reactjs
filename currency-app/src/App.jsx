import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Currency } from './components/Currency'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Currency />
    </div>
  )
}

export default App

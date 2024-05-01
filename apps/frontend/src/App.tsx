import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FillInQuestion from './components/Questions/FillInQuestion';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(()=>{
    fetch('/backend').then((res)=>res.text()).then(setGreeting)
  },[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     <h1>{greeting}</h1>
     <FillInQuestion/>
    </>
  )
}

export default App

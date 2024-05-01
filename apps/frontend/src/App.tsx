import { useEffect, useState } from 'react'
import './App.css'
import FillInQuestion from './components/Questions/DnDQuestion/FillInQuestion';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(()=>{
    fetch('/backend').then((res)=>res.text()).then(setGreeting)
  },[])

  return (
    <>
     <h1>{greeting}</h1>
     <FillInQuestion/>
    </>
  )
}

export default App

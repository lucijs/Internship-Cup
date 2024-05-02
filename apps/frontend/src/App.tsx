import { useEffect, useState } from 'react'
import './App.css'
import FillInQuestion from './components/Questions/DnDQuestion/FillInQuestion';
import MatchingQuestion from './components/Questions/DnDQuestion/MatchingQuestion/MatchingQuestion';
import SliderQuestion from './components/Questions/SliderQuestion';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(()=>{
    fetch('/backend').then((res)=>res.text()).then(setGreeting)
  },[])

  return (
    <>
     <SliderQuestion/>
     <MatchingQuestion/>
     <h1>{greeting}</h1>
     <FillInQuestion/>
    </>
  )
}

export default App


import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';



function App() {
  const [mode, setMode]=useState('light');

  const toggleMode=()=>{
    if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor='gray'
    }
    else{
    setMode('light');
    document.body.style.backgroundColor='white'
  }
}

  return (
  <>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <Textform heading="Enter the text to analyze" mode={mode}/>
    </div>
    
  </>
  );
}

export default App;

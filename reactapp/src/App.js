import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


function App() {
  const[name,setName]=useState('');
  const[greetings,setGreetings]=useState();
  const handlechange=(e)=>{
    setName(e.target.value);
  };
  const handlesubmit=(e)=>{
    e.preventDefault();
  }
  if(name.trim()!==''){
    setGreetings('Hello,${name}');
  }
  return (
    <div className="App">
      <h2>
    </div>
  );
}

export default App;

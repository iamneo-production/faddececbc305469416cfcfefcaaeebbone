import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


function App() {
  const[name,setName]=useState('');
  const[greeting,setGreeting]=useState();
  const handlechange=(e)=>{
    setName(e.target.value);
  };
  const handlesubmit=(e)=>{
    e.preventDefault();
  }
  if(name.trim()!==''){
    setGreeting('Hello,${name}');
  }
  return (
    <div className="App">
      <h2>Hey!!! Greeting</h2>
      <form onSubmit={handlesubmit} data-testing="form">
        <label data-testid="label">Enter your name</label>
        <input type="text" value={name} onChange={handlesubmit}></input>
        <input type="submit" data-testid="buttonElement">Say Hello</button>
        <form>
          {greeting && <h2>{greeting}</h2>}</form>
    </div>
  );
}

export default App;

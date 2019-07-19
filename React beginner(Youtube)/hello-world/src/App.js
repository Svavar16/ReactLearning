import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/message'

function App() {
  return (
    <div className="App">
      <Greet name='Bruce' heroName='Batman'> 
      <p>This is a child paragraph</p>
      </Greet>
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'/>
      <Welcome name='Bruce' heroName='Batman'></Welcome>
      <Welcome name='Clark' heroName='Superman'></Welcome>
      <Welcome name='Diana' heroName='Wonder Woman'></Welcome>
      <Message></Message>
    </div>
  );
}

export default App;

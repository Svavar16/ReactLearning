import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/message'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EvencBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import './appStyles.css'
import Styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={Styles.success}>Success</h1>
      {/*<Inline />
      <StyleSheet primary={true}/>
      <NameList></NameList>
      <UserGreeting></UserGreeting>
      <ParentComponent></ParentComponent>
      <EvencBind></EvencBind>
      <ClassClick></ClassClick>
      <FunctionClick></FunctionClick>
      <Counter></Counter>
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
      <Message></Message>*/}
    </div>
  );
}

export default App;

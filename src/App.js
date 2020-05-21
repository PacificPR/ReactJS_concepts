import React,{Component} from 'react';
import './App.css';
import Greet from './components/Hello'
import HelloC from './components/Hello_classcomp'
import MessageC from './components/MessageC'
import Counter from './components/Counter'
import BindEvent from './components/BindiEvent'

class App extends Component{
  render(){
  return (
    <div className="App">
       {/*} <Greet name="PRASHANT" age="23">
          <h2> Patience Persistence Perseverance</h2>  
        </Greet> */}
        {/*<Greet name="ROHAN" age="73"/> 
        //<Greet name="VISHAL" age="79"/> */}
        {/*<HelloC name="PRASHANT"><h3> Using Class component </h3></HelloC>
        <HelloC name="DEAN">
            <input type="button" value="SMASH"></input>
        </HelloC> <Counter /> <MessageC />

        */}
        <BindEvent />
    </div>
  )
}
}


export default App;

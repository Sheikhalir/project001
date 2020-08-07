import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name}) {
return <div>
          Hello World My Name is <strong> {name} </strong>
          <h1>This is heading one from app.js</h1>
          <h2>This is h2 from app.js</h2>
          <br/>
            <ul>
              <li>UL List 1</li>
              <li>UL List 2</li>
              <li>Ul List 3</li>
            </ul>
          
            <ol>
              <li>OL List 1</li>
              <li>OL List 2</li>
              <li>Ol List 3</li>
            </ol>
            <br/> 
            <Hello></Hello>
       </div>
}

export default App;

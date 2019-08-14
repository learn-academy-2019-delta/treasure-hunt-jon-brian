import React, { Component } from 'react';
import Square from './Components/Square.js'
import Board from './Components/Board.js'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div id="flex">
      <h1>Treasure Hunt</h1>
      <div >
        <Board />
      </div>
      </div>
    );
  }
}
export default App;

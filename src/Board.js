import React, { Component } from 'react';
import '../App.css'
import Square from './Square.js'

class Board extends Component{
    constructor(props){
        super(props)
        this.state = { spaces: [0, 0, 0, 0, 0, 0, 0, 0, 0] }
    }
    handleClick = (squareIndex) =>{
        alert(squareIndex)
    }
    render(){
        
        let square = this.state.spaces.map((value, index) => {
        return(
            <Square
                key={index}
                index={index}
                value={value}
                handleClick={this.handleClick}
            />
             )   
        })
        return(
            <div id="grid">{square}</div>
        )
    }
}
export default Board
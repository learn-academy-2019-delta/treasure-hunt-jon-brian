import React, { Component } from 'react';
import '../App.css'
import Square from './Square.js'

class Board extends Component{
    constructor(props){
        super(props)
        this.state = { spaces: ["?", "?", "?", "?", "?", "?", "?", "?", "?"], 
                       treasure: 0,
                       counter: 9
        }
    }
    
    treasure = () =>{
        let arr = this.state.spaces
        let num = Math.floor(Math.random() * (arr.length))
        console.log(num)
        return this.setState({treasure: num})
    }
    
    handleClick = (squareIndex) =>{
        let arr = this.state.spaces
        arr[squareIndex] = "tree"
        if(this.state.counter<=1){
            alert("you lose")
        }
        let counter =  this.state.counter - 1
        this.setState({counter: counter})
        
        this.setState({spaces: arr})
        if(this.state.treasure==squareIndex){
            alert ("you win")
        }
    }
    reset = () =>{
        this.setState({spaces:["?", "?", "?", "?", "?", "?", "?", "?", "?"]})
        this.setState({counter:9})
        let arr = this.state.spaces
        let num = Math.floor(Math.random() * (arr.length))
        console.log(num)
        return this.setState({treasure: num})
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
           <div style={{textAlign:"center"}}>
                <div id="grid">{square}</div>
                
                <button className="button" onClick={this.treasure}>Start</button>
                <div> </div>
                <button className="button" onClick={this.reset}>Reset</button>
               
                <div style={{color:"#A7F432"}}>{this.state.counter} attempts left</div>
                
            </div>
        )
    }
}
export default Board
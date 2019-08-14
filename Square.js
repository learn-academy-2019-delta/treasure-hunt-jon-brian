import React, { Component } from 'react';
import '../App.css'


class Square extends Component{
    handClick = () =>{
        
        this.props.handleClick(this.props.index)
    }
    render(){
        const { value, index } = this.props
        return(
            <div className="square" onClick={ this.handClick } > 
            { value }{ index }
            </div>
            )
    }
} 

export default Square
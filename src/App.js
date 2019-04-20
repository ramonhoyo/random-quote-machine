import React, { Component } from 'react';
import './App.css';
import QouteBox from './components/QouteBox';   
import {COLORS} from './values/colors'
import { QUOTES, AUTHORS } from './values/qoutes';
class App extends Component { 
  constructor(props){
    super(props)
    this.handleNextQouteClick = this.handleNextQouteClick.bind(this)
    this.state = {
      author: AUTHORS[Math.floor(Math.random()*20)],
      quote:  QUOTES[Math.floor(Math.random()*20)],
      color:  COLORS[Math.floor(Math.random()*17)]
    }
  }

  handleNextQouteClick(event){    
    this.setState({
      author: AUTHORS[Math.floor(Math.random()*20)],
      quote:  QUOTES[Math.floor(Math.random()*20)],
      color:  COLORS[Math.floor(Math.random()*17)]
    })
  }

  render() {
    const currentStyle = Object.assign({}, appStyle, { backgroundColor: this.state.color, color: this.state.color})    
    return (
      <div id="wrapper" style={currentStyle}>
        <QouteBox 
            quote={this.state.quote} 
            author={this.state.author}  
            handleClick={this.handleNextQouteClick}
            color={this.state.color}/>       
      </div>
    );
  }
}


const appStyle = {
  textAlign: "center",
  backgroundColor: "#ffd",
  color: "#fff",
  justifyContent: "center",
  alignItems: "center",
  display:"flex",
  height: "100vh",
}

export default App;

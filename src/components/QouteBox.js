import React , { Component } from 'react'


class QouteBox extends Component {
    render() {        
        const ref = "https://twitter.com/intent/tweet?text=" + this.props.quote
        const currTweetStyle = Object.assign({}, tweetStyle,{ backgroundColor : this.props.color })
        const currButtonStyle = Object.assign({}, nextQouteStyle, { backgroundColor: this.props.color})
        return(
            <div>
                <div style={divStyle} id="quote-box">       
                    <h1 id="text" style={quoteStyle}>{this.props.quote}</h1>
                    <p id="author" style={authorStyle}>{this.props.author}</p>             
                    <div id="buttonsWrapper" style={buttonsContainerStyle} >
                        <a href={ref} style={currTweetStyle} id="tweet-quote">
                            <i className="fa fa-twitter" style={ {verticalAlign : '-webkit-baseline-middle'}}></i>
                        </a>
                        <button id="new-quote" style={currButtonStyle} onClick={this.props.handleClick}>Next Quote</button>
                    </div>             
                </div>
                <div style={footerStyle}>
                    <span style={spanStyle}>Made with <span style={firmStyle}>&#9829;</span> by Andres Hoyo</span>
                </div>
            </div>
            
        )
    }
}

const footerStyle={
    position: "relative",
    width: "100%",
    top: 20 ,
}

var divStyle = {
    textAlign: "center",
    display: "table",
    backgroundColor : "#FFF",
    borderRadius: 2,
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    position: "relative",
    width: 450,
}

var quoteStyle = {
    fontSize: 24,    
    padding: "10px 30px 10px 30px",
}

var authorStyle = {
    fontSize: 18
}

var buttonsContainerStyle = {
    padding : "5px 0px 50px 0px"
}

var nextQouteStyle= {
    margin: "0px 30px 0px 0px",
    borderRadius: 3,
    backgroundColor : "#ffaadd",
    color: "#fff",
    border: 0,
    height: 40,
    float: "right"
}

var tweetStyle = {    
    margin: "0px 0px 0px 30px",
    borderRadius: 3,
    backgroundColor : "#ffaadd",
    color: "#fff",
    height: 40,
    width: 40,
    float: "left"    
}

const firmStyle = {
    color: "white"
  }
  const spanStyle = {
    color: "#fff",
    marginTop : "20xp",
    float: "bottom"
  }
  
export default QouteBox;
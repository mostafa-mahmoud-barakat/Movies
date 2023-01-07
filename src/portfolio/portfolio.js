import React, { Component } from "react";
import Card from "./Card";


  class Portfolio extends Component {
  render() {
    return <>
    <div className="container" >
        <h1 className='my-3 text-start'  >Portfolio</h1>
        <div className="row">
        <Card name="front end develper" style={{background:'gray'}}/>
        <Card name="front end develper" style={{background:'black'}}/>
        <Card name="front end develper" style={{background:'gray'}}/>
        <Card name="front end develper" style={{background:'black'}}/>
        <Card name="front end develper" style={{background:'gray'}}/>
        <Card name="front end develper" style={{background:'black'}}/>
        </div>

    </div>
    
    
    </>
  }
}

export default Portfolio;

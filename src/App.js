import React, { Component } from 'react';
import ColoredText from './components/ColoredText';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: [false, false, false],
    }
  }

  setColor = (color) => {
    this.setState({someColor: color})
  }

  setActive = (index, e) => {
    this.setState((prevState) => {
      let tmpBold = prevState.active;
      tmpBold[index] = !tmpBold[index];
      return{
        active: tmpBold
      }
    });
    e.target.classList.toggle("bold");
  }

  render() {
    return (
      <div>
        <h1>Colors</h1>
        <h2 style={{fontWeight: this.state.someColor === "red" ? "bold" : "normal"}} 
          onClick={() => this.setColor("red")}>Red</h2>
        <h2 style={{fontWeight: this.state.someColor === "green" ? "bold" : "normal"}} 
          onClick={() => this.setColor("green")}>Green</h2>
        <h2 style={{fontWeight: this.state.someColor === "blue" ? "bold" : "normal"}} 
          onClick={() => this.setColor("blue")}>Blue</h2>

        <h1>Indexes</h1>
        <h2 onClick={(e) => this.setActive(0, e)}>1</h2>
        <h2 onClick={(e) => this.setActive(1, e)}>2</h2>
        <h2 onClick={(e) => this.setActive(2, e)}>3</h2>

        <h1>Result</h1>
        <ColoredText isActive={this.state.active[0]} label="1" color={this.state.someColor}/>
        <ColoredText isActive={this.state.active[1]} label="2" color={this.state.someColor}/>
        <ColoredText isActive={this.state.active[2]} label="3" color={this.state.someColor}/>
      </div>
    );
  }
}

export default App;

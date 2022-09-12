import React from "react";

class testC extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
      creator: "",
    };
    this.updateState = this.updateState.bind(this) 

  }
  
  updateState() {
    this.setState(state=>({
      counter: state.counter+1,
      creator: "abdo hesham",
    }));
    console.log(this.state.counter);
  }
  render() {
    return (
      <>
        <button
          onClick={this.updateState}
        >
          Click to increase one
        </button>
        <p> {this.state.creator} </p> 
        <p> counter is {this.state.counter} </p>
      </>
    );
  }
}

export default testC;

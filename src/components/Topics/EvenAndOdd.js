import React from "react";

class EvenAndOdd extends React.Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  handleChange(value) {
    this.setState({
      userInput: value
    });
  }

  assignEvenAndOdds(userInput) {
    let arr = userInput.split(",");
    let evens = [];
    let odds = [];
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        console.log(arr[i]);
        evens.push(parseInt(arr[i], 10));
      } else {
        odds.push(parseInt(arr[i], 10));
      }
    }
    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    // console.log(this.state.userInput);
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Even and Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignEvenAndOdds(this.state.userInput);
          }}
        >
          split
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;

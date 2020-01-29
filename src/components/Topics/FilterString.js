import React from "react";

class FilterString extends React.Component {
  constructor() {
    super();
    this.state = {
      names: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      userInput: "",
      filteredNames: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNames(userInput) {
    let names = this.state.names;
    let filteredNames = [];

    for (let i = 0; i < names.length; i++) {
      if (names[i].includes(userInput)) {
        filteredNames.push(names[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText">
          {" "}
          Names: {JSON.stringify(this.state.names, null, 10)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.filterNames(this.state.userInput)}
        >
          {" "}
          Filter{" "}
        </button>
        <span className="resultsBox filterStringRB">
          {" "}
          Filtered Names: {JSON.stringify(
            this.state.filteredNames,
            null,
            10
          )}{" "}
        </span>
      </div>
    );
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     names: ["james", "avery", "andre", "preston"],
  //     userInput: "",
  //     filteredArray: []
  //   };
  // }

  // updateUserInput = val => {
  //   this.setState({
  //     userInput: val
  //   });
  // };

  // searchArray = () => {
  //   let results = this.state.names.filter(e =>
  //     e.includes(this.state.userInput)
  //   );

  //   this.state.setState({ filteredArray: results });
  // };

  // render() {
  //   console.log(this.state);
  //   return (
  //     <div className="puzzleBox filterStringPB">
  //       <h4>Filter String</h4>
  //       <span className="puzzleText"></span>
  //       <input
  //         className="inputLine"
  //         onChange={e => this.updateUserInput(e.target.value)}
  //       ></input>
  //       <button
  //         className="confirmationButton"
  //         onClick={() => this.searchArray()}
  //       >
  //         Filter
  //       </button>
  //       <span className="resultsBox filterStringRB"></span>
  //     </div>
  //   );
  // }
}

export default FilterString;

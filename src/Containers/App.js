import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
// import { robots } from "./robots";
import "../fonts/Sega.TTF";
import "../Containers/App.css";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";
//declaring a class
//we have a app components with two states
class App extends Component {
  //initializer
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  // if creating a new funciton in react suggesting using arrow
  onSearChange = (event) => {
    this.setState({ searchfield: event.target.value }); //use setState method to change state
  };

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name //if the name of the robot in locase include search field
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1> Loading</h1>;
    } else {
      return (
        <div className="tc">
          <div className="font-face-sega">
            <h1 className="f1">RoboFriends</h1>
          </div>
          <SearchBox searchChange={this.onSearChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}
export default App;

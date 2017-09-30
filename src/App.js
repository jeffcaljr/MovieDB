import React, { Component } from 'react';
import './App.css';
import NavigationMenu from "./components/NavigationMenu";
import MovieList from "./components/MovieList";
import NavigationMenuCollapsed from "./components/NavigationMenuCollapsed";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container-fluid">
              <div className="row">
                  <NavigationMenu className="navigation-container col-md-3 hidden-sm-down"/>
                  <NavigationMenuCollapsed className=" navigation-container hidden-md-up col-12 navbar navbar-toggleable-md navbar-light bg-faded"/>
                  <MovieList className="movie-item-container col-md-9 "/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;

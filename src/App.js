import React, { Component } from 'react';

import {MockMovie} from "./models/movie";
import './App.css';
import NavigationMenu from "./components/NavigationMenu";
import MovieList from "./components/MovieList";
import NavigationMenuCollapsed from "./components/NavigationMenuCollapsed";

class App extends Component {

    movies = [MockMovie, MockMovie,MockMovie,MockMovie,MockMovie,MockMovie,MockMovie,MockMovie,MockMovie]
  render() {
    return (
      <div className="App">
          <div className="container-fluid">
              <div className="row">
                  <NavigationMenu className="navigation-container col-md-3 hidden-sm-down"/>
                  <NavigationMenuCollapsed className=" navigation-container hidden-md-up col-12 navbar navbar-toggleable-md navbar-light bg-faded"/>
                  <MovieList movies={this.movies} className="movie-items-container col-md-9 "/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;

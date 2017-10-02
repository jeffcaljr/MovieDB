import React, { Component } from 'react';
import 'isomorphic-fetch'
import {connect} from 'react-redux'

import './App.css';
import NavigationMenu from "./components/NavigationMenu";
import MovieList from "./components/MovieList";
import NavigationMenuCollapsed from "./components/NavigationMenuCollapsed";
import VideoPlayer from "./components/VideoPlayer";
import config from "./config";
import {GENRES, TRENDING_GENRE} from "./constants/genres";
import LoadingCover from "./components/LoadingCover";
import {load} from "./actions/MovieList";

class App extends Component {
    constructor(){
        super();

        this.state = {
            categories: GENRES
        }

    }
    


  render() {
    return (

      <div className="App">
          <LoadingCover/>

          {
              this.props.videoPlayerOpen
              ? <VideoPlayer/>
              : <LoadingCover/>
          }


          <div className="container-fluid">
              <div className="row">
                  <NavigationMenu
                      className="navigation-container col-md-3 hidden-sm-down"
                      categories={this.state.categories}/>
                  <NavigationMenuCollapsed className=" navigation-container hidden-md-up col-12 navbar navbar-toggleable-md navbar-light bg-faded"/>
                  <MovieList
                      movies={this.state.movies}
                      className="movie-items-container col-md-9 "/>
              </div>
          </div>
      </div>
    );
  }

  componentDidMount(){
        this.props.loadDefaultMovies(TRENDING_GENRE.id)
  }
}

const mapStateToProps = state => {
    return {
        videoPlayerOpen: state.videoPlayerReducer.videoPlayerIsOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadDefaultMovies: genreID => {
            dispatch(load(TRENDING_GENRE.id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

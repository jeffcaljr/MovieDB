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
            videoPlaying: null,
            categories: GENRES
        }

        this.toggleVideoPlayer = this.toggleVideoPlayer.bind(this)
    }


    toggleVideoPlayer = (movie) => {

        if(this.state.videoPlaying != null){
            //stop the video
            alert("hiding movie")
            this.setState({playingVideo: null})

        }
        else{
            //play a video when none was playing before
            this.setState({videoPlaying: movie})
        }

    }


  render() {
    return (

      <div className="App">
          <LoadingCover/>

          {this.state.videoPlaying != null ? <VideoPlayer movie={this.state.videoPlaying} toggleVideo={(movie) => this.toggleVideoPlayer(movie)}/>  : ""}


          <div className="container-fluid">
              <div className="row">
                  <NavigationMenu
                      className="navigation-container col-md-3 hidden-sm-down"
                      categories={this.state.categories}/>
                  <NavigationMenuCollapsed className=" navigation-container hidden-md-up col-12 navbar navbar-toggleable-md navbar-light bg-faded"/>
                  <MovieList
                      movies={this.state.movies}
                      className="movie-items-container col-md-9 "
                      playVideo={(movie) => this.toggleVideoPlayer(movie)}/>
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

import React, { Component } from 'react';
import 'isomorphic-fetch'


import NavigationMenuWrapper from "../Functional/NavigationMenuWrapper";
import MovieList from "../Functional/MovieList";
import NavigationMenuWrapperMobile from "../Functional/NavigationMenuWrapperMobile";
import VideoPlayer from "../Functional/VideoPlayer";
import MovieDetails from '../Functional/MovieDetails'
import {GENRES, TRENDING_GENRE} from "../../constants/genres";
import LoadingCover from "./LoadingCover";

import ErrorDisplay from '../Functional/ErrorsDisplay'
import MenuContent from '../Functional/MenuContent'

class App extends Component {

  render() {
    return (

      <div className="App" id="main">
          <LoadingCover/>

          {
              this.props.modalIsShowing
              ? <MovieDetails className={(this.props.modalIsShowing ? " modal-showing " : " modal-hidden ")}/>
              : null
          }

          {
              this.props.videoPlayerOpen
              ? <VideoPlayer className={((""))}/>
              :  null
          }


          <div className="container-fluid">
              <div className="row">
                  <NavigationMenuWrapper
                      className="navigation-container col-md-3 hidden-sm-down"
                      children={<MenuContent categories={GENRES}/>}/>
                  <NavigationMenuWrapperMobile
                      className="hidden-md-up col-12 navbar navbar-toggleable-md"
                      children={<MenuContent categories={GENRES}/>}/>
                  <MovieList
                      className="movie-items-container col-md-9 "/>
              </div>
          </div>

          <ErrorDisplay/>
      </div>
    );
  }

  componentDidMount(){
        this.props.loadDefaultMovies(TRENDING_GENRE.id)
  }
}

export default App;

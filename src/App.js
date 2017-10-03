import React, { Component } from 'react';
import 'isomorphic-fetch'
import {connect} from 'react-redux'

import NavigationMenu from "./components/NavigationMenuWrapper";
import MovieList from "./components/MovieList";
import NavigationMenuCollapsed from "./components/NavigationMenuCollapsedWrapper";
import VideoPlayer from "./components/VideoPlayer";
import MovieDetails from './components/MovieDetails'
import {GENRES, TRENDING_GENRE} from "./constants/genres";
import LoadingCover from "./components/LoadingCover";
import {load} from "./actions/MovieList";
import ErrorDisplay from './components/ErrorsDisplay'
import MenuContent from './components/MenuContent'

class App extends Component {
    constructor(){
        super();

    }
    


  render() {
    return (

      <div className="App" id="main">
          <LoadingCover/>

          {
              this.props.modalIsShowing
              ? <MovieDetails/>
              : null
          }

          {
              this.props.videoPlayerOpen
              ? <VideoPlayer/>
              :  null
          }


          <div className="container-fluid">
              <div className="row">
                  <NavigationMenu
                      className="navigation-container col-md-3 hidden-sm-down"
                      children={<MenuContent categories={GENRES}/>}/>
                  <NavigationMenuCollapsed
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

const mapStateToProps = state => {
    return {
        videoPlayerOpen: state.videoPlayerReducer.videoPlayerIsOpen,
        modalIsShowing: state.movieDetailModalReducer.showing,
        errors: state.errorReducer.errors
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
